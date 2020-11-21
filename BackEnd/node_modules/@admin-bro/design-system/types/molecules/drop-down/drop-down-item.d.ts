import { BoxProps } from '../../atoms/box/box';
import { VariantType } from '../../theme';
/**
 * Props passed to DropDownItem
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 * @extends BoxProps
 */
export declare type DropDownItemProps = BoxProps & {
    colorVariant?: VariantType;
};
/**
 * @component
 * @private
 */
export declare const DropDownItem: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, DropDownItemProps, never>;
export default DropDownItem;
