"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
exports.default = (theme) => {
    const rgb = polished_1.parseToRgb(theme.colors.accent);
    const color = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, .58)`;
    return `0 1px 4px 0 ${color};`;
};
