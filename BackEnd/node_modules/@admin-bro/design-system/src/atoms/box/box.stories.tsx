import React from 'react'
import { Box, Text, Header, Button } from '../..'

export default { title: 'DesignSystem/Atoms/Box' }

export const simpleWhiteGrayWrapper: React.FC = () => (
  <Box variant="grey">
    <Box variant="white">
      <Text>This is the default wrapper in the application</Text>
    </Box>
  </Box>
)

export const positioningButtons: React.FC = () => (
  <Box variant="grey">
    <Box variant="white" flex flexDirection="row">
      <Box flexGrow={1}>
        <Header.H3>Some header</Header.H3>
      </Box>
      <Box flexShrink={0}>
        <Button>Example Button On The Right</Button>
      </Box>
    </Box>
  </Box>
)
