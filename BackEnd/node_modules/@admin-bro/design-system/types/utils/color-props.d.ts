import { ColorProps } from 'styled-system';
declare type NewColorProps = Omit<ColorProps, 'color'> & {
    color?: string;
};
export { NewColorProps as default, NewColorProps as ColorProps, };
