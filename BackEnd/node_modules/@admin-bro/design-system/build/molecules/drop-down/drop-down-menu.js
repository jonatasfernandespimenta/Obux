"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownMenu = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const drop_down_1 = require("./drop-down");
const utils_1 = require("../../utils");
/**
 * @component
 * @private
 */
exports.DropDownMenu = styled_components_1.default(box_1.default).attrs((props) => ({
    className: utils_1.cssClass([`DropDown-Stick-${props.stick || drop_down_1.DEFAULT_STICK}`, 'DropDownMenu'], props.className),
})) `
  background: ${({ theme }) => theme.colors.white};
  display: inline-block;
  position: absolute;
  z-index: 40;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.card};
  ${({ isVisible }) => (isVisible !== false ? '' : 'display: none;')};

  &.${utils_1.cssClass('DropDown-Stick-left')} .${utils_1.cssClass('DropDownMenu')} {
    left: 100%;
  }
  &.${utils_1.cssClass('DropDown-Stick-right')} .${utils_1.cssClass('DropDownMenu')} {
    right: 100%;
  }
`;
exports.DropDownMenu.displayName = 'DropDownMenu';
exports.default = exports.DropDownMenu;
