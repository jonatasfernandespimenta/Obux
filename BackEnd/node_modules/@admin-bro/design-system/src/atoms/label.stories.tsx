/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { withKnobs, boolean, select } from '../../storybook/node_modules/@storybook/addon-knobs'
import { Label, Text, Box, Icon } from '..'
import StoryWrapper from '../utils/story-wrapper'

export default { title: 'DesignSystem/Atoms/Label', decorators: [withKnobs] }

const variants = ['primary', 'danger', 'success', 'info', 'secondary'] as const

export const Default: React.FC = () => {
  const required = boolean('required', false)
  const uppercase = boolean('uppercase', false)
  const disabled = boolean('disabled', false)
  const size = select('size', ['default', 'lg'], 'default')
  return (
    <Box width={1}>
      <StoryWrapper label="Label">
        <Label
          required={required}
          uppercase={uppercase}
          disabled={disabled}
          size={size}
        >
          Example label
        </Label>
      </StoryWrapper>
      <StoryWrapper label="Inline Label inside the text">
        <Text>
          <Label
            required={required}
            uppercase={uppercase}
            inline
            disabled={disabled}
            size={size}
          >
            Example label:
          </Label> After which there is a text.
        </Text>
      </StoryWrapper>
      <StoryWrapper label="Color and icon">
        {variants.map((variant) => (
          <Box mb="xxl" key={variant}>
            <Label
              variant={variant}
              required={required}
              uppercase={uppercase}
              disabled={disabled}
              size={size}
            >
              <Icon icon="Cloud" mr="md" />
              Variant: &quot;{variant}&quot;
            </Label>
          </Box>
        ))}
      </StoryWrapper>
    </Box>
  )
}
