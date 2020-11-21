"use strict";

var _path = _interopRequireDefault(require("path"));

var _adminBro = _interopRequireDefault(require("../../admin-bro"));

var _generateUserComponentEntry = _interopRequireDefault(require("./generate-user-component-entry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exampleComponent = '../../../spec/fixtures/example-component';
const entryPath = './';
describe('generateUserComponentEntry', function () {
  it('defines AdminBro.UserComponents', function () {
    const adminBro = new _adminBro.default();
    const entryFile = (0, _generateUserComponentEntry.default)(adminBro, entryPath);
    expect(entryFile).to.have.string('AdminBro.UserComponents = {}\n');
  });
  it('adds env variables to the entry file', function () {
    const adminBro = new _adminBro.default({
      env: {
        ENV_NAME: 'value'
      }
    });
    const entryFile = (0, _generateUserComponentEntry.default)(adminBro, entryPath);
    expect(entryFile).to.have.string('AdminBro.env.ENV_NAME = "value"\n');
  });
  it('adds components to the entry file', function () {
    const adminBro = new _adminBro.default();

    const componentId = _adminBro.default.bundle(exampleComponent);

    const rootEntryPath = _path.default.resolve(entryPath);

    const filePath = _path.default.relative(rootEntryPath, _path.default.normalize(_path.default.join(__dirname, exampleComponent)));

    const entryFile = (0, _generateUserComponentEntry.default)(adminBro, entryPath);
    expect(entryFile).to.have.string([`import ${componentId} from '${filePath}'`, `AdminBro.UserComponents.${componentId} = ${componentId}`].join('\n'));
    _adminBro.default.UserComponents = {};
  });
});