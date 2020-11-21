import React from 'react'

import { NavigationElement } from '../../molecules/navigation-element'
import { NavigationElementWithChildrenProps } from './navigation-props'

const NavigationElementWrapper: React.FC<NavigationElementWithChildrenProps> = (props) => {
  const { elements, isOpen } = props
  return (
    <li>
      <NavigationElement {...props} />
      {elements?.length && isOpen ? (
        <ul>
          {elements.map((element, id) => (
            <NavigationElementWrapper
              {...element}
              key={[id, element.href].join('-')}
            />
          ))}
        </ul>
      ) : ''}
    </li>
  )
}

export {
  NavigationElementWrapper,
  NavigationElementWrapper as default,
}
