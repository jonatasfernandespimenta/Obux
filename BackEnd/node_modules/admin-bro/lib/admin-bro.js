"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bundle = exports.registerAdapter = exports.defaultOptions = exports.VERSION = void 0;

var _ = _interopRequireWildcard(require("lodash"));

var path = _interopRequireWildcard(require("path"));

var fs = _interopRequireWildcard(require("fs"));

var _i18next = _interopRequireDefault(require("i18next"));

var _configurationError = _interopRequireDefault(require("./backend/utils/errors/configuration-error"));

var _resourcesFactory = _interopRequireDefault(require("./backend/utils/resources-factory/resources-factory"));

var _userComponentsBundler = _interopRequireDefault(require("./backend/bundler/user-components-bundler"));

var _constants = require("./constants");

var _actions = require("./backend/actions");

var _loginTemplate = _interopRequireDefault(require("./frontend/login-template"));

var _config = require("./locale/config");

var _en = _interopRequireDefault(require("./locale/en"));

var _translateFunctions = require("./utils/translate-functions.factory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'));
const VERSION = pkg.version;
exports.VERSION = VERSION;
const defaultOptions = {
  rootPath: _constants.DEFAULT_PATHS.rootPath,
  logoutPath: _constants.DEFAULT_PATHS.logoutPath,
  loginPath: _constants.DEFAULT_PATHS.loginPath,
  databases: [],
  resources: [],
  dashboard: {},
  pages: {}
};
exports.defaultOptions = defaultOptions;

/**
 * Main class for AdminBro extension. It takes {@link AdminBroOptions} as a
 * parameter and creates an admin instance.
 *
 * Its main responsibility is to fetch all the resources and/or databases given by a
 * user. Its instance is a currier - injected in all other classes.
 *
 * @example
 * const AdminBro = require('admin-bro')
 * const admin = new AdminBro(AdminBroOptions)
 */
class AdminBro {
  /**
   * List of all default actions. If you want to change the behavior for all actions like:
   * _list_, _edit_, _show_, _delete_ and _bulkDelete_ you can do this here.
   *
   * @example <caption>Modifying accessibility rules for all show actions</caption>
   * const { ACTIONS } = require('admin-bro')
   * ACTIONS.show.isAccessible = () => {...}
   */

  /**
   * AdminBro version
   */

  /**
   * @param   {AdminBroOptions} options      Options passed to AdminBro
   */
  constructor(options = {}) {
    /**
     * @type {BaseResource[]}
     * @description List of all resources available for the AdminBro.
     * They can be fetched with the {@link AdminBro#findResource} method
     */
    this.resources = [];
    /**
     * @type {AdminBroOptions}
     * @description Options given by a user
     */

    this.options = _.merge({}, defaultOptions, options);
    this.initI18n();
    const {
      databases,
      resources
    } = this.options;
    const resourcesFactory = new _resourcesFactory.default(this, global.RegisteredAdapters || []);
    this.resources = resourcesFactory.buildResources({
      databases,
      resources
    });
  }

  initI18n() {
    var _this$options$locale, _this$options$locale2;

    this.locale = {
      translations: (0, _config.combineTranslations)(_en.default.translations, (_this$options$locale = this.options.locale) === null || _this$options$locale === void 0 ? void 0 : _this$options$locale.translations),
      language: ((_this$options$locale2 = this.options.locale) === null || _this$options$locale2 === void 0 ? void 0 : _this$options$locale2.language) || _en.default.language
    };

    if (_i18next.default.isInitialized) {
      _i18next.default.addResourceBundle(this.locale.language, 'translation', this.locale.translations);
    } else {
      _i18next.default.init({
        lng: this.locale.language,
        initImmediate: false,
        // loads translations immediately
        resources: {
          [this.locale.language]: {
            translation: this.locale.translations
          }
        }
      });
    } // mixin translate functions to AdminBro instance so users will be able to
    // call adminBro.translateMessage(...)


    this.translateFunctions = (0, _translateFunctions.createFunctions)(_i18next.default);
    Object.getOwnPropertyNames(this.translateFunctions).forEach(translateFunctionName => {
      this[translateFunctionName] = this.translateFunctions[translateFunctionName];
    });
  }
  /**
   * Registers various database adapters written for AdminBro.
   *
   * @example
   * const AdminBro = require('admin-bro')
   * const MongooseAdapter = require('admin-bro-mongoose')
   * AdminBro.registerAdapter(MongooseAdapter)
   *
   * @param  {Object}       options
   * @param  {typeof BaseDatabase} options.Database subclass of {@link BaseDatabase}
   * @param  {typeof BaseResource} options.Resource subclass of {@link BaseResource}
   */


  static registerAdapter({
    Database,
    Resource
  }) {
    if (!Database || !Resource) {
      throw new Error('Adapter has to have both Database and Resource');
    } // checking if both Database and Resource have at least isAdapterFor method


    if (Database.isAdapterFor && Resource.isAdapterFor) {
      global.RegisteredAdapters = global.RegisteredAdapters || [];
      global.RegisteredAdapters.push({
        Database,
        Resource
      });
    } else {
      throw new Error('Adapter elements has to be a subclass of AdminBro.BaseResource and AdminBro.BaseDatabase');
    }
  }
  /**
   * Initializes AdminBro instance in production. This function should be called by
   * all external plugins.
   */


  async initialize() {
    if (process.env.NODE_ENV === 'production' && !(process.env.ADMIN_BRO_SKIP_BUNDLE === 'true')) {
      // eslint-disable-next-line no-console
      console.log('AdminBro: bundling user components...');
      await (0, _userComponentsBundler.default)(this, {
        write: true
      });
    }
  }
  /**
   * Watches for local changes in files imported via {@link AdminBro.bundle}.
   * It doesn't work on production environment.
   *
   * @return  {Promise<never>}
   */


  async watch() {
    if (process.env.NODE_ENV !== 'production') {
      return (0, _userComponentsBundler.default)(this, {
        write: true,
        watch: true
      });
    }

    return undefined;
  }
  /**
   * Renders an entire login page with email and password fields
   * using {@link Renderer}.
   *
   * Used by external plugins
   *
   * @param  {Object} options
   * @param  {String} options.action          Login form action url - it could be
   *                                          '/admin/login'
   * @param  {String} [options.errorMessage]  Optional error message. When set,
   *                                          renderer will print this message in
   *                                          the form
   * @return {Promise<string>}                HTML of the rendered page
   */


  async renderLogin({
    action,
    errorMessage
  }) {
    return (0, _loginTemplate.default)(this, {
      action,
      errorMessage
    });
  }
  /**
   * Returns resource base on its ID
   *
   * @example
   * const User = admin.findResource('users')
   * await User.findOne(userId)
   *
   * @param  {String} resourceId    ID of a resource defined under {@link BaseResource#id}
   * @return {BaseResource}         found resource
   * @throws {Error}                When resource with given id cannot be found
   */


  findResource(resourceId) {
    const resource = this.resources.find(m => {
      var _m$_decorated;

      return ((_m$_decorated = m._decorated) === null || _m$_decorated === void 0 ? void 0 : _m$_decorated.id()) === resourceId;
    });

    if (!resource) {
      throw new Error([`There are no resources with given id: "${resourceId}"`, 'This is the list of all registered resources you can use:', this.resources.map(r => {
        var _r$_decorated;

        return ((_r$_decorated = r._decorated) === null || _r$_decorated === void 0 ? void 0 : _r$_decorated.id()) || r.id();
      }).join(', ')].join('\n'));
    }

    return resource;
  }
  /**
   * Requires given `.jsx/.tsx` file, that it can be bundled to the frontend.
   * It will be available under AdminBro.UserComponents[componentId].
   *
   * @param   {String}  src  Path to a file containing react component.
   *
   * @param  {OverridableComponent}  [componentName] - name of the component which you want
   *                                  to override
   * @returns {String}                componentId - uniq id of a component
   *
   * @example <caption>Passing custom components in AdminBro options</caption>
   * const adminBroOptions = {
   *   dashboard: {
   *     component: AdminBro.bundle('./path/to/component'),
   *   }
   * }
   * @example <caption>Overriding AdminBro core components</caption>
   * // somewhere in the code
   * AdminBro.bundle('./path/to/new-sidebar/component', 'SidebarFooter')
   */


  static bundle(src, componentName) {
    const nextId = Object.keys(global.UserComponents || {}).length + 1;
    const extensions = ['.jsx', '.js', '.ts', '.tsx'];
    let filePath = '';
    const componentId = componentName || `Component${nextId}`;

    if (src[0] === '/') {
      filePath = src;
    } else {
      const stack = (new Error().stack || '').split('\n'); // Node = 8 shows stack like that: '(/path/to/file.ts:77:27)

      const pathNode8 = stack[2].match(/\((.*):[0-9]+:[0-9]+\)/); // Node >= 10 shows stack like that: 'at /path/to/file.ts:77:27

      const pathNode10 = stack[2].match(/at (.*):[0-9]+:[0-9]+/);

      if (!pathNode8 && !pathNode10) {
        throw new Error('STACK does not have a file url. Check out if the node version >= 8');
      }

      const executionPath = pathNode8 && pathNode8[1] || pathNode10 && pathNode10[1];
      filePath = path.join(path.dirname(executionPath), src);
    }

    const {
      root,
      dir,
      name
    } = path.parse(filePath);

    if (!extensions.find(ext => {
      const fileName = path.format({
        root,
        dir,
        name,
        ext
      });
      return fs.existsSync(fileName);
    })) {
      throw new _configurationError.default(`Given file "${src}", doesn't exist.`, 'AdminBro.html');
    } // We have to put this to the global scope because of the NPM resolution. If we put this to
    // let say `AdminBro.UserComponents` (static member) it wont work in a case where user uses
    // AdminBro.bundle from a different packages (i.e. from the extension) because there, there
    // is an another AdminBro version (npm installs different versions for each package). Also
    // putting admin to peerDependencies wont solve this issue, because in the development mode
    // we have to install admin-bro it as a devDependency, because we want to run test or have
    // proper types.


    global.UserComponents = global.UserComponents || {};
    global.UserComponents[componentId] = path.format({
      root,
      dir,
      name
    });
    return componentId;
  }

}

AdminBro.VERSION = VERSION;
AdminBro.ACTIONS = _actions.ACTIONS; // eslint-disable-next-line @typescript-eslint/no-empty-interface

const {
  registerAdapter
} = AdminBro;
exports.registerAdapter = registerAdapter;
const {
  bundle
} = AdminBro;
exports.bundle = bundle;
var _default = AdminBro;
exports.default = _default;