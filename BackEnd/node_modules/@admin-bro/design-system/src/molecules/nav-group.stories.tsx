import React from 'react'
import { NavGroup, Text } from '..'

export default { title: 'DesignSystem/Molecules/NavGroup' }

export const Default: React.FC = () => (
  <NavGroup title="Some group title" icon="Add">
    <Text>Some group element</Text>
  </NavGroup>
)
