"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownItemAction = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const utils_1 = require("../../utils");
exports.DropDownItemAction = styled_components_1.default(box_1.default).attrs((props) => ({
    className: utils_1.cssClass('DropDownItemAction', props.className),
})) `
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')};
`;
exports.DropDownItemAction.defaultProps = {
    width: 1,
    px: 'xxl',
    py: 'lg',
};
exports.default = exports.DropDownItemAction;
