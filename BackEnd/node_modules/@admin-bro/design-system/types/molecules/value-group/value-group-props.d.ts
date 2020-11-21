import { ReactNode } from 'react';
/**
 * Props passed to ValueGroup
 *
 * @memberof ValueGroup
 * @alias ValueGroupProps
 */
export declare type ValueGroupProps = {
    /** Value group label */
    label: string;
    /** Field value passed as a value */
    value?: string | number | boolean;
    /** Field value passed as children node */
    children?: ReactNode;
};
