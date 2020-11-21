import { css } from 'styled-components'
import { typography, TypographyProps, space, SpaceProps } from 'styled-system'

import themeGet from '../../utils/theme-get'

const CaptionShared = css<TypographyProps & SpaceProps>`
  font-family: ${themeGet('font')};
  font-weight: ${themeGet('fontWeights', 'normal')};
  ${typography};
  ${space};
`

export {
  CaptionShared as default,
  CaptionShared,
}
