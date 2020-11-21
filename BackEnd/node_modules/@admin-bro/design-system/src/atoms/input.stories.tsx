import React from 'react'
import { withKnobs, boolean, number, select } from '../../storybook/node_modules/@storybook/addon-knobs'
import { Text, Input, Label, Button, Box } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/Input', decorators: [withKnobs] }

const inputTypes = ['email', 'file', 'hidden', 'month', 'number', 'tel', 'text', 'time', 'url', 'week']

export const Default: React.FC = () => {
  const borderless = boolean('borderless', false)
  const variant = select('variant', ['sm', 'lg', 'xl', 'default'], 'default')
  const type = select('type', inputTypes, 'text')
  const width = number('width', 1 / 2, {
    min: 0,
    max: 1,
    step: 0.1,
  })

  return (
    <Box width={1}>
      <StoryWrapper label="Knobs example">
        <form>
          <Input
            width={width}
            type={type}
            variant={variant}
            borderless={borderless}
          />
          <Button type="submit">Submit</Button>
        </form>
      </StoryWrapper>
    </Box>
  )
}

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Regular input">
      <Input width="300px" id="input1" placeholder="Simple input field..." />
    </StoryWrapper>
    <StoryWrapper label="Disabled">
      <Input width="300px" id="input2" value="I am disabled..." disabled />
    </StoryWrapper>

    <StoryWrapper label="Without a border">
      <Text as="span">Write your name: </Text>
      <Input width="300px" id="input3" value="Write something" borderless />
    </StoryWrapper>

    <StoryWrapper label="different sizes">
      <Box mb="xl" width={1}>
        <Label>Small:</Label>
        <Input width="300px" id="input4" placeholder="sm" variant="sm" />
      </Box>
      <Box mb="xl" width={1}>
        <Label>Large:</Label>
        <Input width="300px" id="input4" placeholder="lg" variant="lg" />
      </Box>
      <Box mb="xl" width={1}>
        <Label>Extra Large:</Label>
        <Input width="300px" id="input4" placeholder="lg" variant="xl" />
      </Box>
      <Box width={1}>
        <Label>Extra Large without a border:</Label>
        <Input width="300px" id="input5" placeholder="Title" variant="xl" borderless />
      </Box>
    </StoryWrapper>
  </Box>
)
