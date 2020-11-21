"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownTrigger = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
/**
 * @component
 * @private
 */
exports.DropDownTrigger = styled_components_1.default.span `
  display: inline-block;
`;
exports.DropDownTrigger.displayName = 'DropDownTrigger';
exports.default = exports.DropDownTrigger;
