"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ModalStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const polished_1 = require("polished");
const styled_system_1 = require("styled-system");
const __1 = require("../..");
const theme_get_1 = __importDefault(require("../../utils/theme-get"));
const DEFAULT_WIDTH = 540;
const VARIANT_BORDER_WIDTH = 8;
const variantStyle = (color, props) => {
    const newPadding = polished_1.getValueAndUnit(theme_get_1.default('space', 'xxl')(props))[0] - VARIANT_BORDER_WIDTH;
    return {
        borderLeftWidth: VARIANT_BORDER_WIDTH,
        borderLeftStyle: 'solid',
        borderLeftColor: color,
        paddingLeft: newPadding,
    };
};
const variants = (props) => styled_system_1.variant({
    prop: 'variant',
    variants: {
        primary: variantStyle('primary100', props),
        danger: variantStyle('error', props),
        success: variantStyle('success', props),
        info: variantStyle('info', props),
        secondary: variantStyle('accent', props),
        light: variantStyle('grey60', props),
        default: {},
    },
});
const ModalStyled = styled_components_1.default(__1.Box) `
  position: relative;
  & > .close-button {
    position: absolute;
    top: ${theme_get_1.default('space', 'md')};
    right: ${theme_get_1.default('space', 'md')};
  }
  & > .modal-label {
    margin-bottom: 0;
    margin-top: -${theme_get_1.default('space', 'xxl')};
    padding-top: ${theme_get_1.default('space', 'sm')};
  }
  ${(props) => variants(props)};
`;
exports.ModalStyled = ModalStyled;
exports.default = ModalStyled;
ModalStyled.defaultProps = {
    pl: 'xxl',
    pr: 'xl',
    pt: 'x3',
    pb: 'xxl',
    bg: 'white',
    width: [1, DEFAULT_WIDTH],
};
