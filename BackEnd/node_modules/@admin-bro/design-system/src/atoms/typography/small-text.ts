import styled from 'styled-components'
import { TypographyProps, SpaceProps } from 'styled-system'

import themeGet from '../../utils/theme-get'
import CaptionShared from './caption-shared'

const SmallText = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'xs')};
  line-height: ${themeGet('lineHeights', 'sm')};
`

export {
  SmallText as default,
  SmallText,
}
