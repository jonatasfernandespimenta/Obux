"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("../box/box"));
/**
 * @component
 * @private
 */
const TooltipContent = styled_components_1.default(box_1.default) ``;
TooltipContent.displayName = 'TooltipContent';
exports.default = TooltipContent;
