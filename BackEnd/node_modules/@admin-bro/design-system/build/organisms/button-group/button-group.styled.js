"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButtonGroup = exports.StyledDropDownItemAction = exports.StyledSingleButton = exports.hasLabel = exports.hasHandler = exports.buttonMargin = exports.BUTTON_IN_GROUP_CLASS_NAME = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const button_1 = require("../../atoms/button");
const utils_1 = require("../../utils");
const drop_down_1 = require("../../molecules/drop-down");
exports.BUTTON_IN_GROUP_CLASS_NAME = utils_1.cssClass('ButtonGroupItem');
exports.buttonMargin = (props) => {
    const { size } = props;
    const margin = size === 'sm' ? 'md' : 'lg';
    return styled_components_1.css `
    & > .${exports.BUTTON_IN_GROUP_CLASS_NAME} {
      margin-right: ${utils_1.themeGet('space', margin)};
      &:last-child {
        margin-right: 0;
      }
    }
  `;
};
exports.hasHandler = (props) => {
    if (!props.onClick && !props.href) {
        return styled_components_1.css `
    &&& {
      cursor: default;
    }
    `;
    }
    return '';
};
exports.hasLabel = (props) => {
    if (!props.hasLabel) {
        return styled_components_1.css `
      padding-left: ${utils_1.themeGet('space', 'md')};
      padding-right: ${utils_1.themeGet('space', 'md')};
      & > .${utils_1.cssClass('Icon')} svg {
        margin-right: 0;
      }
    `;
    }
    return '';
};
exports.StyledSingleButton = styled_components_1.default(button_1.Button) `
  ${exports.hasLabel};
  ${exports.hasHandler};
`;
exports.StyledDropDownItemAction = styled_components_1.default(drop_down_1.DropDownItemAction) `
  ${exports.hasLabel};
`;
exports.StyledButtonGroup = styled_components_1.default(box_1.default) `
  ${exports.buttonMargin};
`;
