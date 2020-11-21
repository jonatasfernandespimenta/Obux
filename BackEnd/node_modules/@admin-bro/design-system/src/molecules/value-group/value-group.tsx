import React from 'react'
import { Box, Label, Text } from '../..'
import { ValueGroupProps } from './value-group-props'

/**
 * @load ./value-group.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see ValueGroupProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-molecules-value-group--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
const ValueGroup: React.FC<ValueGroupProps> = (props) => {
  const { label, value, children } = props

  return (
    <Box mb="xl">
      <Label variant="light">{label}</Label>
      {value ? <Text>{value}</Text> : ''}
      {children}
    </Box>
  )
}

export {
  ValueGroup as default,
  ValueGroup,
}
