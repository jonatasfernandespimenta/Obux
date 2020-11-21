import { NavigationElementProps } from '../../molecules/navigation-element/navigation-element-props';
/**
 * Array of navigation elements. Extending {@link NavigationElementProps}
 *
 * @memberof Navigation
 * @alias NavigationElementWithChildrenProps
 */
export declare type NavigationElementWithChildrenProps = NavigationElementProps & {
    elements?: Array<NavigationElementWithChildrenProps>;
};
/**
 * Props passed to {@link Navigation} component
 *
 * @memberof Navigation
 * @alias NavigationProps
 */
export declare type NavigationProps = {
    label: string;
    elements: Array<NavigationElementWithChildrenProps>;
};
