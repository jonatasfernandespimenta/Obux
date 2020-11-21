"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const label_1 = require("../../atoms/label");
const button_1 = require("../../atoms/button");
const input_1 = require("../../atoms/input");
const link_1 = require("../../atoms/link");
/**
 * @component
 * @private
 */
const InputGroup = styled_components_1.default.div `
  position: relative;
  display: flex;
  width: 100%;
  ${input_1.Input} {
    flex-grow: 1;
  }
  ${input_1.Input}:not(:last-child) {
    border-right: none;
  }
  ${label_1.Label}, & > ${button_1.Button}, & > ${link_1.Link}:last-child {
    padding: ${({ theme }) => theme.space.sm};
    border: solid ${({ theme }) => theme.colors.inputBorder};
    border-width: 1px 1px 1px 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey40};
  }

  ${button_1.Button}:last-child:hover {
    background: ${({ theme }) => theme.colors.hoverBg};
  }

  ${label_1.Label}, ${button_1.Button}, ${link_1.Link} {
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${label_1.Label}, ${link_1.Link} {
    line-height: ${({ theme }) => theme.lineHeights.lg};
  }

  ${button_1.Button}:first-child, ${link_1.Link}:first-child {
    border-right: 0;
  }

  ${input_1.Input}:hover {
    & + ${label_1.Label}, & + ${button_1.Button}, & + ${link_1.Link} {
      border-color: ${({ theme }) => theme.colors.grey60};
    }
  } 
  ${input_1.Input}:focus {
    & + ${label_1.Label}, & + ${button_1.Button}, & + ${link_1.Link} {
      border-color: ${({ theme }) => theme.colors.primary100};
    }
  }
`;
exports.default = InputGroup;
