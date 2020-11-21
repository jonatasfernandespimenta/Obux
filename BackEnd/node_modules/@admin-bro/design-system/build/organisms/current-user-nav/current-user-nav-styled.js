"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCurrentUserNav = exports.default = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../utils");
const index_1 = require("../../index");
const StyledCurrentUserNav = styled_components_1.default(index_1.Box) `
  text-align: right;

  & .line-action {
    .${utils_1.cssClass('Icon')} svg {
      fill: ${utils_1.themeGet('colors', 'grey80')};
    }
    &:hover .${utils_1.cssClass('Icon')} svg {
      fill: ${utils_1.themeGet('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${utils_1.themeGet('space', 'md')} 0;
  }
`;
exports.default = StyledCurrentUserNav;
exports.StyledCurrentUserNav = StyledCurrentUserNav;
StyledCurrentUserNav.defaultProps = {
    flex: true,
    flexDirection: 'row',
};
