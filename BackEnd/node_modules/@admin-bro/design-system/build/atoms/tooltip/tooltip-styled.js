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
exports.StyledTooltip = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const theme_get_1 = __importDefault(require("../../utils/theme-get"));
const box_1 = __importDefault(require("../box/box"));
const ARROW_WIDTH = 7;
const topCSS = styled_components_1.css `
  margin-top: -${(props) => (props.isVisible ? theme_get_1.default('space', 'lg')(props) : '0px')};

  &::after, &::before {
    top: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    border-color: ${theme_get_1.default('colors', 'primary100')} transparent transparent transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    border-color: ${theme_get_1.default('colors', 'highlight')} transparent transparent transparent;
  }
`;
const bottomCSS = styled_components_1.css `
  margin-top: ${(props) => (props.isVisible ? theme_get_1.default('space', 'lg')(props) : '0px')};

  &::after, &::before {
    bottom: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    border-color: transparent transparent ${theme_get_1.default('colors', 'primary100')} transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    border-color: transparent transparent ${theme_get_1.default('colors', 'highlight')} transparent;
  }
`;
const leftCSS = styled_components_1.css `
  margin-left: -${(props) => (props.isVisible ? theme_get_1.default('space', 'lg')(props) : '0px')};

  &::after, &::before {
    left: 100%;
    top: 50%;
  }

  &::after {
    margin-right: -${ARROW_WIDTH}px;
    margin-top: -${ARROW_WIDTH}px;
    border-color: transparent transparent transparent ${theme_get_1.default('colors', 'primary100')};
  }

  &::before {
    margin-right: -${ARROW_WIDTH - 1}px;
    margin-top: -${ARROW_WIDTH - 1}px;
    border-color: transparent transparent transparent ${theme_get_1.default('colors', 'highlight')};
  }
`;
const rightCSS = styled_components_1.css `
  margin-left: ${(props) => (props.isVisible ? theme_get_1.default('space', 'lg')(props) : '0px')};

  &::after, &::before {
    right: 100%;
    top: 50%;
  }

  &::after {
    margin-left: -${ARROW_WIDTH}px;
    margin-top: -${ARROW_WIDTH}px;
    border-color: transparent ${theme_get_1.default('colors', 'primary100')} transparent transparent;
  }

  &::before {
    margin-left: -${ARROW_WIDTH - 1}px;
    margin-top: -${ARROW_WIDTH - 1}px;
    border-color: transparent ${theme_get_1.default('colors', 'highlight')} transparent transparent;
  }
`;
const getPadding = (props) => {
    const px = (props.size === 'lg' ? 'xl' : 'md');
    const py = (props.size === 'lg' ? 'lg' : 'sm');
    return `${theme_get_1.default('space', py)(props)} ${theme_get_1.default('space', px)(props)}`;
};
const StyledTooltip = styled_components_1.default(box_1.default) `
  transition: opacity 0.2s, margin 0.2s;

  position: absolute;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  
  padding: ${(props) => getPadding(props)};

  pointer-events: none;
  
  &::after {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 7px;
    z-index: 1;
  }
  &::before {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 6px;
    z-index: 2;
  }

  ${(props) => ({
    top: topCSS,
    bottom: bottomCSS,
    left: leftCSS,
    right: rightCSS,
}[props.direction])}
`;
exports.StyledTooltip = StyledTooltip;
StyledTooltip.defaultProps = {
    borderColor: 'primary100',
    borderStyle: 'solid',
    borderWidth: '1px',
    bg: 'highlight',
    borderRadius: '3px',
};
exports.default = StyledTooltip;
