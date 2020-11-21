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
exports.default = exports.ModalWrapper = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const modal_inline_1 = require("./modal-inline");
const modal_styled_1 = require("./modal-styled");
const box_1 = __importDefault(require("../../atoms/box/box"));
const overlay_1 = __importDefault(require("../../atoms/overlay"));
const Wrapper = styled_components_1.default(box_1.default) `
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${modal_styled_1.ModalStyled} {
    z-index: 1001;
  }
`;
const ModalWrapper = (props) => {
    const { onOverlayClick } = props, otherProps = __rest(props, ["onOverlayClick"]);
    const handleOverlayClick = onOverlayClick || (() => true);
    return (react_1.default.createElement(Wrapper, { flex: true, justifyContent: "center", alignItems: "center" },
        react_1.default.createElement(overlay_1.default, { onClick: handleOverlayClick }),
        react_1.default.createElement(modal_inline_1.ModalInline, Object.assign({}, otherProps))));
};
exports.ModalWrapper = ModalWrapper;
exports.default = ModalWrapper;
