"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _adminBro = _interopRequireDefault(require("./admin-bro"));

var _backend = require("./backend");

Object.keys(_backend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _backend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _backend[key];
    }
  });
});

var _frontend = require("./frontend");

Object.keys(_frontend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _frontend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _frontend[key];
    }
  });
});

var _locale = require("./locale");

Object.keys(_locale).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _locale[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _locale[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _adminBroOptions = require("./admin-bro-options.interface");

Object.keys(_adminBroOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _adminBroOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _adminBroOptions[key];
    }
  });
});

var _currentAdmin = require("./current-admin.interface");

Object.keys(_currentAdmin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _currentAdmin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _currentAdmin[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _adminBro.default;
exports.default = _default;