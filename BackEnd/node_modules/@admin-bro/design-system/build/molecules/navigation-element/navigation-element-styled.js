"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledNavigationElement = exports.getHoverColor = exports.getSelectedColor = exports.getBg = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const __1 = require("../..");
const utils_1 = require("../../utils");
exports.getBg = (props) => (props.isOpen
    ? utils_1.themeGet('colors', 'grey20')(props)
    : 'transparent');
exports.getSelectedColor = (props) => utils_1.themeGet('colors', props.isSelected ? 'primary100' : 'grey80')(props);
exports.getHoverColor = (props) => utils_1.themeGet('colors', props.isOpen ? 'grey80' : 'primary100')(props);
exports.StyledNavigationElement = styled_components_1.default(__1.Box) `
  background-color: ${exports.getBg};
  padding: ${utils_1.themeGet('space', 'md', '-1px')} ${utils_1.themeGet('space', 'lg')};
  text-decoration: none;
  color: ${exports.getSelectedColor};
  cursor: pointer;
  &:hover {
    color: ${exports.getHoverColor};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${utils_1.themeGet('space', 'lg')};
    & svg {
      fill: ${exports.getSelectedColor};
    }
  }
  & > ${__1.Title} {
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      fill: ${utils_1.themeGet('colors', 'grey40')};
    }
  }
`;
