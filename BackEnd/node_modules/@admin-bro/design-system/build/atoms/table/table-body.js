"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const css_class_1 = require("../../utils/css-class");
/**
 * @component
 * @private
 */
const TableBody = styled_components_1.default.tbody `

`;
TableBody.defaultProps = {
    className: css_class_1.cssClass('TableBody'),
};
exports.default = TableBody;
