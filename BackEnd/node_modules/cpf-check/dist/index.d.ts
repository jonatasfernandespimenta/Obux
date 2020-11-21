declare type CPF = string;
export declare function strip(formattedCPF: any): string;
export declare function format(something: any): CPF;
export declare function validate(something: any): boolean;
export declare function generate(formatted?: boolean): CPF;
declare const _default: {
    strip: typeof strip;
    format: typeof format;
    validate: typeof validate;
    generate: typeof generate;
};
export default _default;
