"use strict";

var _chai = require("chai");

var _loginTemplate = _interopRequireDefault(require("./login-template"));

var _adminBro = _interopRequireDefault(require("../admin-bro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('login-template', function () {
  const action = '/login';
  it('renders error message', async function () {
    const adminBro = new _adminBro.default({});
    const errorMessage = 'Something went wrong';
    const html = await (0, _loginTemplate.default)(adminBro, {
      action,
      errorMessage
    });
    (0, _chai.expect)(html).to.contain(errorMessage);
  });
});