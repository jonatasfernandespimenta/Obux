import styled from 'styled-components'
import Box from '../../atoms/box/box'
import { cssClass } from '../../utils'

export const DropDownItemAction = styled(Box).attrs((props) => ({
  className: cssClass('DropDownItemAction', props.className),
}))`
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')};
`

DropDownItemAction.defaultProps = {
  width: 1,
  px: 'xxl',
  py: 'lg',
}

export default DropDownItemAction
