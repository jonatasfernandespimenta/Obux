"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectStyles = exports.filterStyles = void 0;
const focus_shadow_style_1 = __importDefault(require("./focus-shadow.style"));
const selectStyles = (theme) => ({
    control: (provided, state) => (Object.assign(Object.assign({}, provided), { borderRadius: '0px', borderWidth: '1px', background: theme.colors.white, color: theme.colors.grey80, '&:hover': {
            borderColor: theme.colors.grey60,
        }, borderColor: state.isFocused ? theme.colors.primary100 : theme.colors.inputBorder, boxShadow: state.isFocused ? focus_shadow_style_1.default(theme) : 'none' })),
    menu: (provided) => (Object.assign(Object.assign({}, provided), { borderRadius: '0px', borderColor: theme.colors.grey20, background: theme.colors.white })),
    input: () => ({
        color: theme.colors.grey80,
        background: theme.colors.white,
        border: 'none',
    }),
    singleValue: () => ({
        color: theme.colors.grey80,
    }),
    option: (provided, state) => {
        let color = state.isSelected ? theme.colors.grey80 : theme.colors.grey60;
        if (state.isFocused) {
            color = theme.colors.white;
        }
        return Object.assign(Object.assign({}, provided), { color, background: state.isFocused
                ? theme.colors.primary100
                : 'transparent' });
    },
});
exports.selectStyles = selectStyles;
const filterStyles = (theme) => ({
    control: (provided, state) => (Object.assign(Object.assign({}, provided), { border: state.isFocused
            ? `1px solid ${theme.colors.primary100}`
            : `1px solid ${theme.colors.filterInputBorder}`, borderRadius: '0px', background: 'transparent', color: theme.colors.white, boxShadow: state.isFocused ? focus_shadow_style_1.default(theme) : 'none' })),
    input: () => ({
        color: theme.colors.white,
    }),
    singleValue: () => ({
        color: theme.colors.white,
    }),
    option: (provided, state) => (Object.assign(Object.assign({}, provided), { color: state.isSelected ? theme.colors.white : theme.colors.grey20, background: state.isFocused ? 'rgba(32,39,62,0.25)' : 'transparent' })),
    menu: (provided) => (Object.assign(Object.assign({}, provided), { borderRadius: '0px', borderColor: theme.colors.grey20, background: theme.colors.filterBg, zIndex: 5 })),
});
exports.filterStyles = filterStyles;
