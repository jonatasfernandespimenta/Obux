import { BoxProps } from '../../atoms/box/box';
import { DropDownStickProp } from './drop-down';
/**
 * Props passed to DropDownMenu element.
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 */
export declare type DropDownMenuProps = BoxProps & {
    isVisible?: boolean;
    stick?: DropDownStickProp;
};
/**
 * @component
 * @private
 */
export declare const DropDownMenu: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, DropDownMenuProps, never>;
export default DropDownMenu;
