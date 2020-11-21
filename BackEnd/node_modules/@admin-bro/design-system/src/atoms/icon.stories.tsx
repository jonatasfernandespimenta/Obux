import React from 'react'
import { withKnobs, text, select, boolean } from '../../storybook/node_modules/@storybook/addon-knobs'
import Icon from './icon'

export default { title: 'DesignSystem/Atoms/Icon', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const icon = text(
    'CamelCased name of an icon from https://www.carbondesignsystem.com/guidelines/icons/library/',
    'ErrorOutline',
  )
  const size = select('Size variant', [16, 20, 24, 32], 16)
  const color = text('Icon color', 'black')
  const bg = text('Icon background', 'white')
  const rounded = boolean('If background should be rounded', false)
  const spin = boolean('Indicates if given icons should spin', false)
  return (
    <Icon
      icon={icon}
      size={size}
      color={color}
      bg={bg}
      rounded={rounded}
      spin={spin}
    />
  )
}
