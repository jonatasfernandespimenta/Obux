"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@admin-bro/design-system");

var BackendFilter = _interopRequireWildcard(require("../../../../backend/utils/filter/filter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PARAM_SEPARATOR
} = BackendFilter;

const Filter = props => {
  const {
    property,
    filter,
    onChange
  } = props;
  const fromKey = `${property.path}${PARAM_SEPARATOR}from`;
  const toKey = `${property.path}${PARAM_SEPARATOR}to`;
  const fromValue = filter[fromKey];
  const toValue = filter[toKey];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    variant: "filter"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, property.label), /*#__PURE__*/_react.default.createElement(_designSystem.Label, null, "- From: "), /*#__PURE__*/_react.default.createElement(_designSystem.DatePicker, {
    value: fromValue,
    onChange: data => onChange(fromKey, data),
    propertyType: property.type
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Label, {
    mt: "default"
  }, "- To: "), /*#__PURE__*/_react.default.createElement(_designSystem.DatePicker, {
    value: toValue,
    onChange: data => onChange(toKey, data),
    propertyType: property.type
  })));
};

var _default = Filter;
exports.default = _default;