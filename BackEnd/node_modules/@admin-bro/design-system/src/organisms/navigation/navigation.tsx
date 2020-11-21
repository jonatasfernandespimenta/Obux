import React from 'react'

import { NavigationProps } from './navigation-props'
import { StyledNavigation } from './navigation-styled'
import { NavigationElementWrapper } from './navigation-element-wrapper'

import { Label } from '../../atoms/label'

/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
const Navigation: React.FC<NavigationProps> = (props) => {
  const { label, elements } = props
  return (
    <StyledNavigation px="xl" py="lg">
      <Label pl="lg" mb="md" uppercase>{label}</Label>
      <ul>
        {elements.map((element, id) => (
          <NavigationElementWrapper key={[id, element.href].join('-')} {...element} />
        ))}
      </ul>
    </StyledNavigation>
  )
}

export {
  Navigation,
  Navigation as default,
}
