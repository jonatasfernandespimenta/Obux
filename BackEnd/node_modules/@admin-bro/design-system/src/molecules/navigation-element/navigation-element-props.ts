import React from 'react'

/**
 * Handler function for a NavigationElementProps['onClick']
 *
 * @memberof NavigationElement
 * @alias NavigationElementOnClickHandler
 */
export type NavigationElementOnClickHandler = (
  /** React.MouseEvent */
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  /** All props (along with the `id`) are also passed to the handler */
  props: NavigationElementProps
) => void

/**
 * Prop Types of a NavigationElement component.
 *
 * @memberof NavigationElement
 * @alias NavigationElementProps
 */
export type NavigationElementProps = {
  /** Link href property */
  href?: string;
  /** Icon name */
  icon?: string;
  /**
   * Indicates if navigation element should be open(able). If set to undefined: element wont be
   * "openable". Tf set to either false or true - element will be open or close.
   */
  isOpen?: boolean;
  /** If element should be selected */
  isSelected?: boolean
  /** Label of the element */
  label: string,
  /** Element uniq ID  */
  id?: string,
  /** On Click handler */
  onClick?: NavigationElementOnClickHandler;
}
