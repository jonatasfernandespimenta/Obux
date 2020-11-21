"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const __1 = require("..");
const StoryWrapper = (props) => {
    const { label, children } = props;
    return (react_1.default.createElement(__1.Box, { variant: "grey" },
        react_1.default.createElement(__1.Label, null, label),
        react_1.default.createElement(__1.Box, { bg: "white", p: "xxl", width: 1 }, children)));
};
exports.default = StoryWrapper;
