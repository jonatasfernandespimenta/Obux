"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Moon = (props) => {
    const { width, height } = props;
    const svgWidth = width || '260px';
    const svgHeight = height || '260px';
    return (react_1.default.createElement("svg", { width: svgWidth, height: svgHeight, viewBox: "0 0 260 260", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("circle", { id: "path-1", cx: "106", cy: "106", r: "106" }),
            react_1.default.createElement("filter", { x: "-17.0%", y: "-17.0%", width: "134.0%", height: "134.0%", filterUnits: "objectBoundingBox", id: "filter-2" },
                react_1.default.createElement("feOffset", { dx: "0", dy: "0", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
                react_1.default.createElement("feGaussianBlur", { stdDeviation: "12", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
                react_1.default.createElement("feColorMatrix", { values: "0 0 0 0 0.958112299   0 0 0 0 0.910577834   0 0 0 0 0.855913579  0 0 0 1 0", type: "matrix", in: "shadowBlurOuter1" })),
            react_1.default.createElement("circle", { id: "path-3", cx: "106", cy: "106", r: "106" })),
        react_1.default.createElement("g", { id: "Main-Templates", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { id: "Group-12", transform: "translate(24.000000, 24.000000)" },
                react_1.default.createElement("g", { id: "Oval" },
                    react_1.default.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#filter-2)", href: "#path-1" }),
                    react_1.default.createElement("use", { fill: "#F4E8DB", fillRule: "evenodd", href: "#path-1" })),
                react_1.default.createElement("g", { id: "Path-7" },
                    react_1.default.createElement("mask", { id: "mask-4", fill: "white" },
                        react_1.default.createElement("use", { href: "#path-3" })),
                    react_1.default.createElement("use", { id: "Mask", fill: "#F4E8DB", href: "#path-3" }),
                    react_1.default.createElement("path", { d: "M39.8069626,3.76747066 C45.3021184,115.593145 97.2894125,176.043124 195.768845,185.117407 C294.248278,194.191689 253.575457,215.872553 73.750384,250.16 L-33.92,160.780637 L-25.2907546,24.0909209 L26.5457822,-4.24 L39.8069626,3.76747066 Z", fill: "#C8BBB2", mask: "url(#mask-4)" })),
                react_1.default.createElement("circle", { id: "Oval", fill: "#C8BBB2", cx: "80.5", cy: "37.5", r: "22.5" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-3", fill: "#C8BBB2", cx: "158", cy: "66", r: "17" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-4", stroke: "#F4E8DB", strokeWidth: "3", fill: "#C8BBB2", cx: "124", cy: "166", r: "17" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-5", stroke: "#F4E8DB", strokeWidth: "1.6875", fill: "#C8BBB2", cx: "58.5", cy: "92.5", r: "9.5" }),
                react_1.default.createElement("circle", { id: "Oval-Copy", fill: "#C8BBB2", cx: "157.5", cy: "124.5", r: "8.5" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-6", fill: "#C8BBB2", cx: "190", cy: "96", r: "3" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-8", fill: "#C8BBB2", cx: "81", cy: "113", r: "3" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-7", fill: "#C8BBB2", cx: "126", cy: "29", r: "3" }),
                react_1.default.createElement("circle", { id: "Oval-Copy-2", fill: "#C8BBB2", cx: "97.5", cy: "101.5", r: "8.5" })))));
};
exports.default = Moon;
