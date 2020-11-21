"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Edit = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@admin-bro/design-system");

var _addNewItemTranslation = _interopRequireDefault(require("./add-new-item-translation"));

var _utils = require("../../../../utils");

var _propertyLabel = require("../utils/property-label");

var _convertToSubProperty = require("./convert-to-sub-property");

var _removeSubProperty = require("./remove-sub-property");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ItemRenderer = props => {
  const {
    ItemComponent,
    property,
    onDelete
  } = props;
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flex: true,
    flexDirection: "row",
    alignItems: "center",
    "data-testid": property.path
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flexGrow: 1
  }, /*#__PURE__*/_react.default.createElement(ItemComponent, props)), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    flexShrink: 0,
    ml: "lg"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    rounded: true,
    ml: "default",
    "data-testid": "delete-item",
    type: "button",
    size: "icon",
    onClick: event => onDelete(event, property),
    variant: "danger"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "TrashCan"
  }))));
};

const InputsInSection = props => {
  const {
    property,
    record,
    resource,
    onChange
  } = props;
  const items = _utils.flat.get(record.params, property.path) || [];
  const addNew = (0, _react.useCallback)(event => {
    const newItems = [...items, property.subProperties.length ? {} : ''];
    onChange(property.path, newItems);
    event.preventDefault();
    return false;
  }, [record, onChange, property]);
  const removeItem = (0, _react.useCallback)((event, subProperty) => {
    const newRecord = (0, _removeSubProperty.removeSubProperty)(record, subProperty.path);
    onChange(newRecord);
    event.preventDefault();
    return false;
  }, [record, onChange, property]);
  return /*#__PURE__*/_react.default.createElement(_designSystem.Section, {
    mt: "xl"
  }, items.map((item, i) => {
    const itemProperty = (0, _convertToSubProperty.convertToSubProperty)(props.property, i);
    return /*#__PURE__*/_react.default.createElement(ItemRenderer, _extends({}, props, {
      property: itemProperty,
      key: itemProperty.path,
      onDelete: removeItem
    }));
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    onClick: addNew,
    type: "button",
    rounded: true
  }, /*#__PURE__*/_react.default.createElement(_addNewItemTranslation.default, {
    resource: resource,
    property: property
  })));
};

const Edit = props => {
  const {
    property,
    record,
    testId
  } = props;
  const error = record.errors && record.errors[property.propertyPath];
  return /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, {
    error: !!error,
    "data-testid": testId
  }, /*#__PURE__*/_react.default.createElement(_propertyLabel.PropertyLabel, {
    property: property
  }), /*#__PURE__*/_react.default.createElement(InputsInSection, props), /*#__PURE__*/_react.default.createElement(_designSystem.FormMessage, null, error && error.message));
};

exports.Edit = exports.default = Edit;