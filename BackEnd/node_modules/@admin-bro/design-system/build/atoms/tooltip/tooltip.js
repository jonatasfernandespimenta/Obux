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
exports.default = exports.Tooltip = void 0;
/* eslint-disable max-len */
const react_1 = __importStar(require("react"));
const portal_utils_1 = __importDefault(require("../../utils/portal-utils"));
const tooltip_control_1 = require("./tooltip-control");
const TooltipPortal = portal_utils_1.default.createPortalForKey('TOOLTIP', tooltip_control_1.TooltipControl);
/**
 * @load ./tooltip.doc.md
 * @component
 * @subcategory Atoms
 * @hideconstructor
 * @new In version 3.3
 * @section design-system
 */
const Tooltip = (props) => {
    const { direction, title, children, size } = props;
    const childRef = react_1.useRef(null);
    const [isVisible, setIsVisible] = react_1.useState(false);
    let TriggerElement;
    let ContentElement;
    const childrenCount = react_1.default.Children.count(children);
    if (childrenCount === 1) {
        TriggerElement = children;
    }
    else if (childrenCount === 2) {
        react_1.default.Children.forEach(children, (child) => {
            var _a;
            const type = (_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName;
            if (type === 'TooltipContent') {
                ContentElement = child;
            }
            else {
                TriggerElement = child;
            }
        });
    }
    const onEnter = () => {
        setIsVisible(true);
    };
    const onLeave = () => {
        setIsVisible(false);
    };
    const ChildWithRef = react_1.forwardRef((triggerProps, ref) => react_1.default.cloneElement(TriggerElement, Object.assign(Object.assign({}, triggerProps), { displayName: 'TooltipTrigger', ref })));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ChildWithRef, { ref: childRef, onMouseEnter: onEnter, onMouseLeave: onLeave }),
        isVisible && (react_1.default.createElement(TooltipPortal, { title: title, childRef: childRef, size: size, direction: direction, ContentElement: ContentElement }))));
};
exports.Tooltip = Tooltip;
exports.default = Tooltip;
