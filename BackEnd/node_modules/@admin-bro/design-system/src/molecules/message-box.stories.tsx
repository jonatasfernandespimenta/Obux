import React from 'react'
import { withKnobs, radios, text } from '../../storybook/node_modules/@storybook/addon-knobs'
import { Box, MessageBox } from '..'

export default { title: 'DesignSystem/Molecules/MessageBox', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const Options = {
    danger: 'danger',
    info: 'info',
    success: 'success',
  }
  const variant = radios('MessageBox variant', Options, Options.info) as keyof typeof Options
  const icon = text('Icon which will be seen in the title', 'AddComment')

  return (
    <Box py="lg">
      <MessageBox
        size="sm"
        message="Info message"
        mt="default"
        variant={variant}
        icon={icon}
      >
        With inside text
      </MessageBox>
    </Box>
  )
}
