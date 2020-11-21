"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("./box/box"));
const css_class_1 = require("../utils/css-class");
exports.Overlay = styled_components_1.default(box_1.default) `

`;
exports.Overlay.defaultProps = {
    width: '100%',
    height: '100%',
    bg: 'grey100',
    opacity: 0.2,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 40,
    className: css_class_1.cssClass('Overlay'),
};
exports.default = exports.Overlay;
