import React from 'react'
import { Label, Radio, Box } from '..'

export default { title: 'DesignSystem/Atoms/Radio' }

export const Default: React.FC = () => (
  <Box flex>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox1" checked />
      <Label inline htmlFor="checkbox1" ml="default">Checked</Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox2" checked={false} />
      <Label inline htmlFor="checkbox2" ml="default">Unchecked</Label>
    </Box>
    <Box flexDirection="column" marginRight={15}>
      <Radio id="checkbox3" checked disabled />
      <Label inline htmlFor="checkbox3" ml="default">Disabled</Label>
    </Box>
  </Box>
)
