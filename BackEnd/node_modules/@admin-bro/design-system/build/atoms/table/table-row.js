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
const TableRow = styled_components_1.default.tr `
  &:hover {
    background: ${({ theme }) => theme.colors.grey20};
  }
`;
TableRow.defaultProps = {
    className: css_class_1.cssClass('TableRow'),
};
exports.default = TableRow;
