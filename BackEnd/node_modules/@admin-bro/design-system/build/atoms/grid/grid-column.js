"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridColumn = exports.default = void 0;
const styled_system_1 = require("styled-system");
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const GridColumn = styled_components_1.default(box_1.default) `
  ${styled_system_1.grid};
`;
exports.default = GridColumn;
exports.GridColumn = GridColumn;
