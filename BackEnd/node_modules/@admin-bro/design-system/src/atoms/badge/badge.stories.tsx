import React from 'react'
import { withKnobs, select, boolean } from '../../../storybook/node_modules/@storybook/addon-knobs'
import StoryWrapper from '../../utils/story-wrapper'
import { Badge, Box, Label, Header, Text as TextComponent } from '../..'

export default { title: 'DesignSystem/Atoms/Badge', decorators: [withKnobs] }

enum BadgeVariant {
  Primary = 'primary',
  Danger = 'danger',
  Text = 'text',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary'
}

enum BadgeSize {
  Small = 'sm',
  Default = 'default',
  Large = 'lg',
}

export const Default: React.FC = () => {
  const variant = select('Variant', Object.values(BadgeVariant), BadgeVariant.Primary)
  const size = select('Size', Object.values(BadgeSize), BadgeSize.Default)
  const outline = boolean('Outline', false)
  return (
    <StoryWrapper label="Badge props">
      <Badge
        variant={variant}
        size={size}
        outline={outline}
      >
        Badge example
      </Badge>
    </StoryWrapper>
  )
}

export const Examples: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Badge Variants">
      <Box><Label>Regular: </Label></Box>
      <Box>
        {Object.values(BadgeVariant).map((variant) => (
          <Badge variant={variant} key={variant} mr="default">
            {variant}
          </Badge>
        ))}
      </Box>
      <Box><Label>Outlined: </Label></Box>
      <Box>
        {Object.values(BadgeVariant).map((variant) => (
          <Badge variant={variant} key={variant} mr="default" outline>
            {variant}
          </Badge>
        ))}
      </Box>
    </StoryWrapper>
    <StoryWrapper label="Badge sizes">
      {Object.values(BadgeSize).map((size) => (
        <Badge variant="primary" size={size} key={size} mr="default">
          {size}
        </Badge>
      ))}
    </StoryWrapper>
    <StoryWrapper label="With other elements">
      <Header.H1>
        H1. Header
        <Badge ml="default">Badge</Badge>
      </Header.H1>
      <Header.H2>
        H1. Header
        <Badge ml="default" size="sm" variant="primary">Small badge</Badge>
      </Header.H2>
      <TextComponent mt="xxl">
        Inside text
        <Badge mx="defaultt">Is something</Badge>
      </TextComponent>
    </StoryWrapper>
  </Box>
)
