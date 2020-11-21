import styled, { css } from 'styled-components'
import Box from '../../atoms/box/box'
import { Button } from '../../atoms/button'
import { cssClass, themeGet } from '../../utils'
import { DropDownItemAction } from '../../molecules/drop-down'
import { ButtonGroupProps } from './button-group.types'

export const BUTTON_IN_GROUP_CLASS_NAME = cssClass('ButtonGroupItem')

export const buttonMargin = (props: Pick<ButtonGroupProps, 'size'>) => {
  const { size } = props
  const margin = size === 'sm' ? 'md' : 'lg'
  return css`
    & > .${BUTTON_IN_GROUP_CLASS_NAME} {
      margin-right: ${themeGet('space', margin)};
      &:last-child {
        margin-right: 0;
      }
    }
  `
}

export const hasHandler = (props: any) => {
  if (!props.onClick && !props.href) {
    return css`
    &&& {
      cursor: default;
    }
    `
  }
  return ''
}

export const hasLabel = (props: any) => {
  if (!props.hasLabel) {
    return css`
      padding-left: ${themeGet('space', 'md')};
      padding-right: ${themeGet('space', 'md')};
      & > .${cssClass('Icon')} svg {
        margin-right: 0;
      }
    `
  }
  return ''
}

export const StyledSingleButton = styled(Button)<{hasLabel: boolean}>`
  ${hasLabel};
  ${hasHandler};
`

export const StyledDropDownItemAction = styled<any>(DropDownItemAction)`
  ${hasLabel};
`

export const StyledButtonGroup = styled(Box)`
  ${buttonMargin};
`
