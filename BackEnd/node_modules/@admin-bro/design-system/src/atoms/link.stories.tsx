import React from 'react'
import { withKnobs, select, boolean } from '../../storybook/node_modules/@storybook/addon-knobs'
import Link from './link'

export default { title: 'DesignSystem/Atoms/Link', decorators: [withKnobs] }

enum LinkVariant {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Info = 'info',
  Secondary = 'secondary'
}

enum LinkSize {
  Sm = 'sm',
  Lg = 'lg'
}

export const Default: React.FC = () => {
  const uppercase = boolean('Defines if link should be uppercase', false)
  const variant = select('Color variant', Object.values(LinkVariant), LinkVariant.Primary)
  const size = select('Size variant', Object.values(LinkSize), LinkSize.Sm)
  return (
    <Link
      uppercase={uppercase}
      variant={variant}
      size={size}
      href="/"
    >
      {`just ${variant} ${size} ${uppercase ? 'uppercased' : ''} link`}
    </Link>
  )
}
