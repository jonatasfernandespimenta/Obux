"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../utils");
const css_class_1 = require("../../utils/css-class");
/**
 * @component
 * @private
 */
const TableHead = styled_components_1.default.thead `
  background: ${utils_1.themeGet('colors', 'grey20')};

  & a {
    color: ${utils_1.themeGet('colors', 'grey60')};
    text-decoration: none;
    font-size: ${utils_1.themeGet('fontSizes', 'sm')};
    white-space: nowrap;
    
    .${css_class_1.cssClass('Icon')} svg {
      fill: ${utils_1.themeGet('colors', 'primary100')};
    }
  }
`;
TableHead.defaultProps = {
    className: css_class_1.cssClass('TableHead'),
};
exports.default = TableHead;
