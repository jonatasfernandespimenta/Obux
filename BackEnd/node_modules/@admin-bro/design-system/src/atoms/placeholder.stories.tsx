import React from 'react'
import { Placeholder, Box, Label } from '..'

export default { title: 'DesignSystem/Atoms/Placeholder' }

export const imagePlaceholder: React.FC = () => (
  <Placeholder width={200} height={200} />
)

export const textPlaceholder: React.FC = () => (
  <Box>
    <Label>Some name</Label>
    <Placeholder width={400} height={14} />
  </Box>
)
