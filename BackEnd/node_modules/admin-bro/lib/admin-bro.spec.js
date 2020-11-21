"use strict";

var _path = _interopRequireDefault(require("path"));

var _chai = require("chai");

var _adminBro = _interopRequireDefault(require("./admin-bro"));

var _baseDatabase = _interopRequireDefault(require("./backend/adapters/database/base-database"));

var _baseResource = _interopRequireDefault(require("./backend/adapters/resource/base-resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AdminBro', function () {
  beforeEach(function () {
    global.RegisteredAdapters = [];
  });
  describe('#constructor', function () {
    it('sets default root path when no given', function () {
      (0, _chai.expect)(new _adminBro.default().options.rootPath).to.equal('/admin');
    });
  });
  describe('.AdminBro.registerAdapter', function () {
    beforeEach(function () {
      class Database extends _baseDatabase.default {}

      class Resource extends _baseResource.default {}

      this.DatabaseAdapter = {
        Database,
        Resource
      };
    });
    it('adds given adapter to list off all available adapters', function () {
      _adminBro.default.registerAdapter(this.DatabaseAdapter);

      (0, _chai.expect)(global.RegisteredAdapters).to.have.lengthOf(1);
    });
    it('throws an error when adapter is not full', function () {
      (0, _chai.expect)(() => {
        _adminBro.default.registerAdapter({
          Resource: _baseResource.default,
          Database: null
        });
      }).to.throw('Adapter has to have both Database and Resource');
    });
    it('throws an error when adapter has elements not being subclassed from base adapter', function () {
      (0, _chai.expect)(() => {
        _adminBro.default.registerAdapter({
          Resource: {},
          Database: {}
        });
      }).to.throw('Adapter elements has to be a subclass of AdminBro.BaseResource and AdminBro.BaseDatabase');
    });
  });
  describe('.bundle', function () {
    afterEach(function () {
      global.UserComponents = {};
    });
    context('file exists', function () {
      beforeEach(function () {
        this.result = _adminBro.default.bundle('../spec/fixtures/example-component');
      });
      it('adds given file to a UserComponents object', function () {
        (0, _chai.expect)(Object.keys(global.UserComponents || {})).to.have.lengthOf(1);
      });
      it('returns uniq id', function () {
        (0, _chai.expect)(global.UserComponents && global.UserComponents[this.result]).not.to.be.undefined;
        (0, _chai.expect)(this.result).to.be.a('string');
      });
      it('converts relative path to absolute path', function () {
        (0, _chai.expect)(global.UserComponents && global.UserComponents[this.result]).to.equal(_path.default.join(__dirname, '../spec/fixtures/example-component'));
      });
    });
    context('component name given', function () {
      const componentName = 'Dashboard';
      let result;
      beforeEach(function () {
        result = _adminBro.default.bundle('../spec/fixtures/example-component', componentName);
      });
      it('returns the same component name as which was given', function () {
        (0, _chai.expect)(result).to.eq(componentName);
      });
    });
    it('throws an error when component doesn\'t exist', function () {
      (0, _chai.expect)(() => {
        _adminBro.default.bundle('./fixtures/example-components');
      }).to.throw().property('name', 'ConfigurationError');
    });
  });
});