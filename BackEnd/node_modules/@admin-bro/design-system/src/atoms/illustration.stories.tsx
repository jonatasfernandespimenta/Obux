import React from 'react'
import { withKnobs, select, number } from '../../storybook/node_modules/@storybook/addon-knobs'
import Illustration from './illustration'

export default { title: 'DesignSystem/Atoms/Illustration', decorators: [withKnobs] }

const VARIANTS = ['Moon', 'Rocket', 'Astronaut', 'DocumentCheck',
  'DocumentSearch', 'FileSearch', 'FlagInCog', 'Folders', 'Launch', 'Planet',
  'AdminBroLogo', 'SoftwareBrothersLogo', 'GithubLogo',
  'SlackLogo']

export const Default: React.FC = () => {
  const variant = select('Available illustration variant', VARIANTS, VARIANTS[0])
  const width = number('Optional max width restrictions', 150)
  const height = number('Optional max height restrictions', 150)

  return (
    <Illustration
      variant={variant as any}
      width={width}
      height={height}
    />
  )
}
