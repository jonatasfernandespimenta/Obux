import React from 'react'
import { Box, Label, BoxProps } from '..'

export type StoryWrapperProps = BoxProps & {
  label: string
}

const StoryWrapper: React.FC<StoryWrapperProps> = (props) => {
  const { label, children } = props
  return (
    <Box variant="grey">
      <Label>{label}</Label>
      <Box bg="white" p="xxl" width={1}>
        {children}
      </Box>
    </Box>
  )
}

export default StoryWrapper
