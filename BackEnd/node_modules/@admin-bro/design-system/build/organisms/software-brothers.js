"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareBrothers = exports.default = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const __1 = require("..");
const utils_1 = require("../utils");
const StyledWrapper = styled_components_1.default(__1.Text) `
  font-size: ${utils_1.themeGet('fontSizes', 'sm')};
  & > a {
    color: ${utils_1.themeGet('colors', 'grey60')};
    font-size: ${utils_1.themeGet('fontSizes', 'sm')};
    text-decoration: none;
    margin-left: ${utils_1.themeGet('space', 'xs')};
    &:hover {
      color: ${utils_1.themeGet('colors', 'love')};
    }
  }

  & > .${utils_1.cssClass('Icon')} {
    padding: 0 ${utils_1.themeGet('space', 'xs')};
  }
`;
StyledWrapper.defaultProps = {
    color: 'grey60',
    textAlign: 'center',
};
const SoftwareBrothers = () => (react_1.default.createElement(StyledWrapper, null,
    "With",
    react_1.default.createElement(__1.Icon, { icon: "FavoriteFilled", color: "love" }),
    "by",
    react_1.default.createElement("a", { href: "http://softwarebrothers.co", target: "_blank", rel: "noopener noreferrer" }, "SoftwareBrothers")));
exports.default = SoftwareBrothers;
exports.SoftwareBrothers = SoftwareBrothers;
