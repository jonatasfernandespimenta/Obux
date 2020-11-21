import React from 'react'
import { withKnobs } from '../../storybook/node_modules/@storybook/addon-knobs'

import { Section, Box, Button, Icon, Text, CardTitle } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/Section',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
export const Default: React.FC = () => (
  <StoryWrapper label="Section default settings">
    <Section>
      <Box mb="xl">
        <CardTitle>Some text within a section</CardTitle>
      </Box>
      <Section>
        <Text>
          Section can be nested
        </Text>
        <Box>
          <Button size="sm" rounded><Icon icon="Add" />Add something</Button>
        </Box>
      </Section>
    </Section>
  </StoryWrapper>
)
