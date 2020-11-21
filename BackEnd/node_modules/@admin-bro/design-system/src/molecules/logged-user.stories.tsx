import React from 'react'
import { withKnobs } from '../../storybook/node_modules/@storybook/addon-knobs'
import { LoggedUser, Link } from '..'

export default { title: 'DesignSystem/Molecules/LoggedUser', decorators: [withKnobs] }

export const Default: React.FC = () => (
  <LoggedUser
    email="example.user@example.com"
    title="John Doe"
    avatarUrl="https://i.pravatar.cc/300"
  >
    <Link href="/">some option</Link>
  </LoggedUser>
)
