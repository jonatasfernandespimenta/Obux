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
exports.default = exports.ModalInline = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const modal_styled_1 = require("./modal-styled");
/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */
const ModalInline = (props) => {
    const { title, subTitle, variant, onClose, children, buttons, label, icon } = props, boxProps = __rest(props, ["title", "subTitle", "variant", "onClose", "children", "buttons", "label", "icon"]);
    return (react_1.default.createElement(modal_styled_1.ModalStyled, Object.assign({ variant: variant }, boxProps),
        label && (react_1.default.createElement(__1.Label, { size: "lg", variant: variant, className: "modal-label" },
            icon && (react_1.default.createElement(__1.Icon, { icon: icon })),
            label)),
        title && react_1.default.createElement(__1.H5, null, title),
        onClose && (react_1.default.createElement(__1.Button, { className: "close-button", size: "icon", variant: "text", onClick: onClose, rounded: true },
            react_1.default.createElement(__1.Icon, { icon: "CloseOutline" }))),
        subTitle && react_1.default.createElement(__1.Text, null, subTitle),
        children,
        buttons && buttons.length && (react_1.default.createElement(__1.Box, { flex: true, flexDirection: "row", justifyContent: "flex-end" }, buttons.map((buttonProps, key) => (
        // eslint-disable-next-line react/no-array-index-key
        react_1.default.createElement(__1.Button, Object.assign({ key: key, mr: "md", mt: "sm" }, buttonProps))))))));
};
exports.ModalInline = ModalInline;
exports.default = ModalInline;
