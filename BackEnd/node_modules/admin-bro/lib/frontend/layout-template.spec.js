"use strict";

var _chai = require("chai");

var _layoutTemplate = _interopRequireDefault(require("./layout-template"));

var _adminBro = _interopRequireDefault(require("../admin-bro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('layoutTemplate', function () {
  context('AdminBro with branding options set as a function', function () {
    const companyName = 'Dynamic Company';
    let html;
    beforeEach(async function () {
      const adminBro = new _adminBro.default({
        branding: async () => ({
          companyName
        })
      });
      html = await (0, _layoutTemplate.default)(adminBro, undefined, '/');
    });
    it('renders default company name', function () {
      (0, _chai.expect)(html).to.contain(companyName);
    });
    it('links to global bundle', async function () {
      (0, _chai.expect)(html).to.contain('global.bundle.js');
    });
  });
  describe('AdminBro with branding options given', function () {
    const branding = {
      softwareBrothers: false,
      companyName: 'Other name',
      favicon: '/someImage.png'
    };
    let html;
    beforeEach(async function () {
      const adminBro = new _adminBro.default({
        branding
      });
      html = await (0, _layoutTemplate.default)(adminBro, undefined, '/');
    });
    it('renders company name', function () {
      (0, _chai.expect)(html).to.contain(branding.companyName);
    });
    it('renders favicon', function () {
      (0, _chai.expect)(html).to.contain(`<link rel="shortcut icon" type="image/png" href="${branding.favicon}" />`);
    });
  });
  context('custom styles and scripts were defined in AdminBro options', function () {
    let html;
    const scriptUrl = 'http://somescript.com';
    const styleUrl = 'http://somestyle.com';
    beforeEach(async function () {
      const adminBro = new _adminBro.default({
        assets: {
          styles: [styleUrl],
          scripts: [scriptUrl]
        }
      });
      html = await (0, _layoutTemplate.default)(adminBro, undefined, '/');
    });
    it('adds styles to the head section', function () {
      (0, _chai.expect)(html).to.contain(styleUrl);
    });
    it('adds scripts to the body', function () {
      (0, _chai.expect)(html).to.contain(scriptUrl);
    });
  });
});