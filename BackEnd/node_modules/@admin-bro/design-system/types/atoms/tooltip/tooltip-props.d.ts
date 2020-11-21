import { ReactNode, RefObject } from 'react';
import { DirectionProps } from '../../utils/direction-props';
import { BoxProps } from '../box/box';
/**
 * Props passed to the {@link Tooltip} component.
 *
 * @memberof Tooltip
 * @alias TooltipProps
 */
export declare type TooltipProps = {
    /** Text shown on the tooltip */
    title?: string;
    /** Direction of tooltip */
    direction: DirectionProps;
    /** Tooltip size */
    size?: 'default' | 'lg';
};
export declare type PortalProps = TooltipProps & {
    childRef: RefObject<HTMLElement>;
    ContentElement?: ReactNode;
};
export declare type StyledTooltipProps = BoxProps & Pick<TooltipProps, 'direction'> & {
    isVisible: boolean;
};
export default TooltipProps;
