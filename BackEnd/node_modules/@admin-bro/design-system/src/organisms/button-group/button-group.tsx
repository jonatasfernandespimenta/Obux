/* eslint-disable react/no-array-index-key */
import React from 'react'

import { BUTTON_IN_GROUP_CLASS_NAME, StyledButtonGroup } from './button-group.styled'
import { ButtonGroupProps } from './button-group.types'
import { ButtonInGroup } from './button-in-group'

/**
 * @load ./button-group.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-button-group--default Storybook}
 * @component
 * @subcategory Organisms
 * @section design-system
 * @new in version 3.3
 */
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { buttons, size, rounded } = props

  if (!buttons || !buttons.length) {
    return null
  }

  return (
    <StyledButtonGroup {...props}>
      {buttons.map((button, i) => (
        <ButtonInGroup
          key={`${button.label || ''}-${i}`}
          size={size}
          rounded={rounded}
          {...button}
          className={BUTTON_IN_GROUP_CLASS_NAME}
        />
      )) }
    </StyledButtonGroup>
  )
}

export {
  ButtonGroup as default,
  ButtonGroup,
}
