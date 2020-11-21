"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalUtils = exports.default = void 0;
/* eslint-disable arrow-body-style */
const react_dom_1 = __importDefault(require("react-dom"));
const react_1 = __importStar(require("react"));
const generate_id_1 = __importDefault(require("./generate-id"));
// TODO: handle iframe case with ref.current.ownerDocument
const PortalUtils = {
    appendElement: (element) => {
        window.document.body.appendChild(element);
    },
    removeElement: (id) => {
        const domElement = window.document.getElementById(id);
        domElement === null || domElement === void 0 ? void 0 : domElement.remove();
    },
    createPortalForKey: function createPortalForKey(idKey, Component) {
        const Portal = (props) => {
            const [id] = react_1.useState(generate_id_1.default(idKey));
            const [portalElement] = react_1.useState(window.document.createElement('div'));
            react_1.useEffect(() => {
                portalElement.id = id;
                PortalUtils.appendElement(portalElement);
                return () => {
                    PortalUtils.removeElement(id);
                };
            });
            return react_dom_1.default.createPortal((react_1.default.createElement(Component, Object.assign({}, props))), portalElement);
        };
        return Portal;
    },
};
exports.default = PortalUtils;
exports.PortalUtils = PortalUtils;
