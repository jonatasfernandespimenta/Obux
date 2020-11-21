import React, { useState } from 'react'
import { NavigationElement, Box } from '../..'
import { withKnobs, boolean, text } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'

import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Molecules/Navigation', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const isSelected = boolean('selected', false)
  const icon = text('icon', 'Dashboard')
  const label = text('label', 'Dashboard')

  const handleClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <StoryWrapper label="Navigation Element">
      <Box px="xl" py="xxl" width="300px" border="bg">
        <NavigationElement
          href="#"
          open={isOpen}
          isSelected={isSelected}
          icon={icon}
          label={label}
          onClick={handleClick}
        />
      </Box>
    </StoryWrapper>
  )
}
