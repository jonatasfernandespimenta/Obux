import styled from 'styled-components'

import { cssClass, themeGet } from '../../utils'
import { Box } from '../../index'

const StyledCurrentUserNav = styled(Box)`
  text-align: right;

  & .line-action {
    .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'grey80')};
    }
    &:hover .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${themeGet('space', 'md')} 0;
  }
`

StyledCurrentUserNav.defaultProps = {
  flex: true,
  flexDirection: 'row',
}

export {
  StyledCurrentUserNav as default,
  StyledCurrentUserNav,
}
