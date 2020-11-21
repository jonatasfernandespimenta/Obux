"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerContent = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
/**
 * @component
 * @private
 */
exports.DrawerContent = styled_components_1.default.section `
  flex-grow: 1;
  overflow: auto;
  padding: ${({ theme }) => theme.space.x3} ${({ theme }) => theme.space.xxl} ${({ theme }) => theme.space.xl};
  box-sizing: border-box;
  ${styled_system_1.space};
`;
exports.default = exports.DrawerContent;
