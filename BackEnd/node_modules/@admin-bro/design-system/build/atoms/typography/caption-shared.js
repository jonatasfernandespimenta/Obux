"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptionShared = exports.default = void 0;
const styled_components_1 = require("styled-components");
const styled_system_1 = require("styled-system");
const theme_get_1 = __importDefault(require("../../utils/theme-get"));
const CaptionShared = styled_components_1.css `
  font-family: ${theme_get_1.default('font')};
  font-weight: ${theme_get_1.default('fontWeights', 'normal')};
  ${styled_system_1.typography};
  ${styled_system_1.space};
`;
exports.default = CaptionShared;
exports.CaptionShared = CaptionShared;
