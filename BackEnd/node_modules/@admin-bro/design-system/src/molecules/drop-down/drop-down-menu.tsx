import styled from 'styled-components'

import Box, { BoxProps } from '../../atoms/box/box'
import { DEFAULT_STICK, DropDownStickProp } from './drop-down'
import { cssClass } from '../../utils'

/**
 * Props passed to DropDownMenu element.
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 */
export type DropDownMenuProps = BoxProps & {
  isVisible?: boolean;
  stick?: DropDownStickProp;
}

/**
 * @component
 * @private
 */
export const DropDownMenu = styled(Box).attrs<DropDownMenuProps>((props) => ({
  className: cssClass(
    [`DropDown-Stick-${props.stick || DEFAULT_STICK}`, 'DropDownMenu'], props.className,
  ),
}))<DropDownMenuProps>`
  background: ${({ theme }): string => theme.colors.white};
  display: inline-block;
  position: absolute;
  z-index: 40;
  flex-direction: column;
  box-shadow: ${({ theme }): string => theme.shadows.card};
  ${({ isVisible }): string => (isVisible !== false ? '' : 'display: none;')};

  &.${cssClass('DropDown-Stick-left')} .${cssClass('DropDownMenu')} {
    left: 100%;
  }
  &.${cssClass('DropDown-Stick-right')} .${cssClass('DropDownMenu')} {
    right: 100%;
  }
`

DropDownMenu.displayName = 'DropDownMenu'

export default DropDownMenu
