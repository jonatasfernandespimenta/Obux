import styled from 'styled-components'
import { themeGet } from '../../utils'
import { cssClass } from '../../utils/css-class'

/**
 * @component
 * @private
 */
const TableHead = styled.thead`
  background: ${themeGet('colors', 'grey20')};

  & a {
    color: ${themeGet('colors', 'grey60')};
    text-decoration: none;
    font-size: ${themeGet('fontSizes', 'sm')};
    white-space: nowrap;
    
    .${cssClass('Icon')} svg {
      fill: ${themeGet('colors', 'primary100')};
    }
  }
`

TableHead.defaultProps = {
  className: cssClass('TableHead'),
}

export default TableHead
