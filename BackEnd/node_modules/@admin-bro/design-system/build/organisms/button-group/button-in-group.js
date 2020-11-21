"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ButtonInGroup = void 0;
const react_1 = __importDefault(require("react"));
const drop_down_1 = require("../../molecules/drop-down");
const single_button_in_group_1 = require("./single-button-in-group");
const drop_down_item_with_buttons_1 = require("./drop-down-item-with-buttons");
exports.ButtonInGroup = (props) => {
    const { buttons, className } = props, buttonProps = __rest(props, ["buttons", "className"]);
    if (buttons && buttons.length) {
        return (react_1.default.createElement(drop_down_1.DropDown, { stick: "right", className: className },
            react_1.default.createElement(drop_down_1.DropDownTrigger, null,
                react_1.default.createElement(single_button_in_group_1.SingleButtonInGroup, Object.assign({}, props))),
            react_1.default.createElement(drop_down_1.DropDownMenu, null, buttons.map((button) => (react_1.default.createElement(drop_down_item_with_buttons_1.DropDownItemWithButtons, Object.assign({}, button, { key: `${button.label}-${button.icon}` })))))));
    }
    return react_1.default.createElement(single_button_in_group_1.SingleButtonInGroup, Object.assign({}, buttonProps, { className: className }));
};
exports.default = exports.ButtonInGroup;
