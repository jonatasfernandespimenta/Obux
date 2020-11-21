import styled from 'styled-components'

import { themeGet } from '../../utils'
import { Box } from '../..'

const StyledNavigation = styled(Box)`
  ul ul > li {
    padding-left: ${themeGet('space', 'xxl')};
    &:last-child {
      margin-bottom: ${themeGet('space', 'lg')};
    }
  }
`

export {
  StyledNavigation,
  StyledNavigation as default,
}
