"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridRow = exports.default = void 0;
const styled_system_1 = require("styled-system");
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const utils_1 = require("../../utils");
// const column = style({
//   prop: 'column',
//   cssProperty: 'grid-column',
//   transformValue: (n) => `span ${n}`,
// })
const GridRow = styled_components_1.default(box_1.default) `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${utils_1.themeGet('space', 'xl')};
  grid-auto-flow: column;
  margin-bottom: ${utils_1.themeGet('space', 'xl')};

  &:last-child {
    margin-bottom: 0;
  }

  ${styled_system_1.grid};
`;
exports.default = GridRow;
exports.GridRow = GridRow;
