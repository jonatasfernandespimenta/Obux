import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms/icon'
import { Box } from '../atoms/box/box'
import { Text } from '../atoms/text'
import { cssClass } from '../utils/css-class'
import themeGet from '../utils/theme-get'

const NavGroupTitle = styled(Text)`
  padding: 11px 20px;
  margin: 0;
  color: ${themeGet('colors', 'grey100')};
  border-radius: 9999px;
  display: flex;
  cursor: pointer;

  & > ${Text} {
    display: block;
    flex-grow: 1;
    line-height: ${themeGet('lineHeights', 'default')};
    margin-bottom: 0;
  }

  & + ${Box} {
    padding-left: ${themeGet('space', 'xxl', '12px')};
  }

  & > .${cssClass('Icon')} svg {
    vertical-align: middle;
    padding-bottom: 2px;
    flex-shrink: 0;
  }

  & > .${cssClass('Icon')}:first-child {
    padding-right: ${themeGet('space', 'md')};
  }

  & > .${cssClass('Icon')}:last-child {
    padding-left: ${themeGet('space', 'sm')};
  }
`

NavGroupTitle.defaultProps = {
  className: cssClass('NavGroupTitle'),
}

/**
 * @memberof NavGroup
 * @alias NavGroupProps
 */
export type NavGroupProps = {
  /** Title of the navigation group */
  title: string;
  /** Optional icon */
  icon?: string;
}

/**
 * @classdesc
 *
 * > This component is deprecated in favour of {@link NavigationElement} and
 * {@link Navigation} components
 *
 * <img src="components/navgroup.png" />
 *
 * NavGroup is used in a navigation sidebar to group similar elements
 *
 * ### Usage
 *
 * ```javascript
 * import { NavGroup, NavGroupProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavGroupProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-navgroup--default Storybook}
 * @example
 * return (
 *   <Box py="xl">
 *     <NavGroup title="Some group title" icon="Add">
 *       <Text>Some group element</Text>
 *     </NavGroup>
 *   </Box>
 * )
 * @section design-system
 * @deprecated in favour of {@link Navigation} and {@link NavigationElement} components
 */
const NavGroup: React.FC<NavGroupProps> = (props) => {
  const { title, icon, children } = props
  const [isItOpen, toggleOpen] = useState(true)
  const chevron = isItOpen ? 'ChevronUp' : 'ChevronDown'
  return (
    <Box className={cssClass('NavGroup')}>
      <NavGroupTitle
        onClick={(): void => toggleOpen(!isItOpen)}
        bg={isItOpen ? 'grey20' : 'transparent'}
      >
        <Icon icon={icon || 'Settings'} />
        <Text>{title}</Text>
        <Icon icon={chevron} />
      </NavGroupTitle>
      {isItOpen ? (
        <Box pb="xl" pt="sm">
          {children}
        </Box>
      ) : ''}
    </Box>
  )
}

export { NavGroup }
export default NavGroup
