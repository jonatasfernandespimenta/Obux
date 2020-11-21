"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownItem = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const box_1 = __importDefault(require("../../atoms/box/box"));
const utils_1 = require("../../utils");
const drop_down_menu_1 = __importDefault(require("./drop-down-menu"));
const variantsShared = (color) => ({
    color,
    [`& .${utils_1.cssClass('DropDownItemAction')}`]: {
        color,
    },
    '&:hover': {
        borderColor: color,
    },
    [`& .${utils_1.cssClass('Icon')} svg`]: {
        fill: color,
    },
});
const colorVariants = styled_system_1.variant({
    prop: 'colorVariant',
    variants: {
        primary: variantsShared('primary100'),
        danger: variantsShared('error'),
        success: variantsShared('success'),
        info: variantsShared('info'),
        secondary: { bg: 'accent' },
        light: variantsShared('grey80'),
        default: {},
    },
});
/**
 * @component
 * @private
 */
exports.DropDownItem = styled_components_1.default(box_1.default) `
  position: relative;
  z-index: 10000;
  border: none;
  color: ${utils_1.themeGet('colors', 'grey80')};
  font-family: ${utils_1.themeGet('font')};
  border: solid transparent;
  border-width: 0 ${utils_1.themeGet('space', 'sm')};
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;

  &:hover {
    border-color: ${utils_1.themeGet('colors', 'primary100')};
    background: ${utils_1.themeGet('colors', 'grey20')};
  }

  & .${utils_1.cssClass('Icon')} {
    padding-right: ${utils_1.themeGet('space', 'default')};
    fill: ${utils_1.themeGet('colors', 'grey40')};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${drop_down_menu_1.default} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${drop_down_menu_1.default} {
    display: flex;
  }

  & a {
    color: ${utils_1.themeGet('colors', 'grey80')};
    text-decoration: none;
  }
  padding: ${utils_1.themeGet('space', 'lg')} ${utils_1.themeGet('space', 'xxl')};

  ${styled_system_1.space};
  ${colorVariants};
`;
exports.default = exports.DropDownItem;
