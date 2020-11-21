import {
  NavigationElementProps,
} from '../../molecules/navigation-element/navigation-element-props'

/**
 * Array of navigation elements. Extending {@link NavigationElementProps}
 *
 * @memberof Navigation
 * @alias NavigationElementWithChildrenProps
 */
export type NavigationElementWithChildrenProps = NavigationElementProps & {
  elements?: Array<NavigationElementWithChildrenProps>,
}

/**
 * Props passed to {@link Navigation} component
 *
 * @memberof Navigation
 * @alias NavigationProps
 */
export type NavigationProps = {
  label: string;
  elements: Array<NavigationElementWithChildrenProps>;
}
