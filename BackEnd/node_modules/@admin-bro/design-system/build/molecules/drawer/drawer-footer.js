"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerFooter = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
/**
 * @component
 * @private
 */
exports.DrawerFooter = styled_components_1.default.section `
  padding: ${({ theme }) => theme.space.xxl} ${({ theme }) => theme.space.lg};
  text-align: center;
  flex-shrink: 0;
  ${styled_system_1.space};
`;
exports.default = exports.DrawerFooter;
