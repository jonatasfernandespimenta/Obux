"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Modal = void 0;
/* eslint-disable max-len */
const react_1 = __importDefault(require("react"));
const portal_utils_1 = __importDefault(require("../../utils/portal-utils"));
const modal_wrapper_1 = __importDefault(require("./modal-wrapper"));
const ModalPortal = portal_utils_1.default.createPortalForKey('MODAL', modal_wrapper_1.default);
/**
 * @load ./modal.doc.md
 * @component
 * @subcategory Molecules
 * @section design-system
 * @hideconstructor
 * @new In version 3.3
 */
const Modal = (props) => (react_1.default.createElement(ModalPortal, Object.assign({}, props)));
exports.Modal = Modal;
exports.default = Modal;
