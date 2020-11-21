import { DefaultTheme } from 'styled-components';
declare const selectStyles: (theme: DefaultTheme) => {
    control: (provided: any, state: any) => any;
    menu: (provided: any) => any;
    input: () => {
        color: string;
        background: string;
        border: string;
    };
    singleValue: () => {
        color: string;
    };
    option: (provided: any, state: any) => any;
};
declare const filterStyles: (theme: DefaultTheme) => {
    control: (provided: any, state: any) => any;
    input: () => {
        color: string;
    };
    singleValue: () => {
        color: string;
    };
    option: (provided: any, state: any) => any;
    menu: (provided: any) => any;
};
export { filterStyles, selectStyles };
