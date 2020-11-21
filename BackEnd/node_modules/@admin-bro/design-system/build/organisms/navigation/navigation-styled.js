"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.StyledNavigation = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../utils");
const __1 = require("../..");
const StyledNavigation = styled_components_1.default(__1.Box) `
  ul ul > li {
    padding-left: ${utils_1.themeGet('space', 'xxl')};
    &:last-child {
      margin-bottom: ${utils_1.themeGet('space', 'lg')};
    }
  }
`;
exports.StyledNavigation = StyledNavigation;
exports.default = StyledNavigation;
