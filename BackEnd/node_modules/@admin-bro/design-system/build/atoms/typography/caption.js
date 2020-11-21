"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.default = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_get_1 = __importDefault(require("../../utils/theme-get"));
const caption_shared_1 = __importDefault(require("./caption-shared"));
const Caption = styled_components_1.default('div') `
  ${caption_shared_1.default};
  font-size: ${theme_get_1.default('fontSizes', 'sm')};
  line-height: ${theme_get_1.default('lineHeights', 'md')};
`;
exports.default = Caption;
exports.Caption = Caption;
