import React from 'react'
import { withKnobs, object } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'

import { ValueGroup, Box, CardTitle, Text } from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Molecules/ValueGroup',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
export const Default: React.FC = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const objects = object('objects', [{
    label: 'First Name',
    onClick: handleClick,
    value: 'Wojtek',
  }, {
    label: 'Last Name',
    onClick: handleClick,
    value: 'Krysiak',
  }])

  return (
    <StoryWrapper label="ValueGroup default settings">
      <Box>
        {objects.map((field) => (
          <ValueGroup key={field.label} {...field} />
        ))}
        <ValueGroup label="value with styled children">
          <CardTitle>With children which are wrapped with CardTitle</CardTitle>
        </ValueGroup>
        <ValueGroup label="With Multiline Content">
          <Box variant="white" border="default">
            <Text>
              <h4>I am header</h4>
              <p>And I am content</p>
            </Text>
          </Box>
        </ValueGroup>
      </Box>
    </StoryWrapper>
  )
}
