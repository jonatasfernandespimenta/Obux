"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const button_1 = require("../button");
const text_1 = require("../text");
const css_class_1 = require("../../utils/css-class");
const utils_1 = require("../../utils");
const CAPTION_HEIGHT = '42px';
/**
 * @component
 * @private
 */
const TableCaption = styled_components_1.default.caption `
  font-family: ${utils_1.themeGet('font')};
  padding: ${utils_1.themeGet('space', 'sm')} ${utils_1.themeGet('space', 'lg')};
  text-align: left;
  color: ${utils_1.themeGet('colors', 'white')};
  font-size: ${utils_1.themeGet('fontSizes', 'default')};
  line-height: ${utils_1.themeGet('lineHeights', 'default')};
  position: absolute;
  height: ${CAPTION_HEIGHT};
  left: 0;
  right: 0;
  top: -${CAPTION_HEIGHT};
  background: ${utils_1.themeGet('colors', 'primary100')};
  box-sizing: border-box;
  vertical-align: middle;

  & ${button_1.Button} {
    color: ${utils_1.themeGet('colors', 'white')};
    & > span svg {
      fill: ${utils_1.themeGet('colors', 'white')};
    }
    &:hover {
      color: ${utils_1.themeGet('colors', 'white')};
      .${css_class_1.cssClass('Icon')} svg {
        fill: ${utils_1.themeGet('colors', 'white')};
      }
    }
  }

  & ${text_1.Text} {
    color: ${utils_1.themeGet('colors', 'white')};
  }
`;
TableCaption.defaultProps = {
    className: css_class_1.cssClass('TableCaption'),
};
exports.default = TableCaption;
