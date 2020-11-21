import styled from 'styled-components'
import { TypographyProps, SpaceProps } from 'styled-system'

import themeGet from '../../utils/theme-get'
import CaptionShared from './caption-shared'

const Caption = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'sm')};
  line-height: ${themeGet('lineHeights', 'md')};
`

export {
  Caption as default,
  Caption,
}
