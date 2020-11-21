"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const text_1 = __importDefault(require("../../atoms/text"));
/**
 * @component
 * @private
 */
const FormMessage = styled_components_1.default(text_1.default) `
  box-sizing: border-box;
  vertical-align: middle;
  height: ${({ theme }) => theme.space.xl};
  margin: ${({ theme }) => theme.space.sm} 0 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
exports.default = FormMessage;
