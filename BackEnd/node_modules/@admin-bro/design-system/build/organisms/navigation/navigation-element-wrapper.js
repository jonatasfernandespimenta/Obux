"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.NavigationElementWrapper = void 0;
const react_1 = __importDefault(require("react"));
const navigation_element_1 = require("../../molecules/navigation-element");
const NavigationElementWrapper = (props) => {
    const { elements, isOpen } = props;
    return (react_1.default.createElement("li", null,
        react_1.default.createElement(navigation_element_1.NavigationElement, Object.assign({}, props)),
        (elements === null || elements === void 0 ? void 0 : elements.length) && isOpen ? (react_1.default.createElement("ul", null, elements.map((element, id) => (react_1.default.createElement(NavigationElementWrapper, Object.assign({}, element, { key: [id, element.href].join('-') })))))) : ''));
};
exports.NavigationElementWrapper = NavigationElementWrapper;
exports.default = NavigationElementWrapper;
