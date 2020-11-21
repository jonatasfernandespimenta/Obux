import React from 'react'
import Box from '../../atoms/box/box'
import Icon from '../../atoms/icon'
import { StyledSingleButton } from './button-group.styled'
import { ButtonInGroupProps } from './button-group.types'

export const SingleButtonInGroup: React.FC<ButtonInGroupProps> = (props) => {
  const { icon, label, buttons, source, onClick, ...buttonProps } = props
  const onClickHandler = onClick ? (event) => onClick(event, source) : undefined

  return (
    <StyledSingleButton
      as="a"
      hasLabel={!!label}
      onClick={onClickHandler}
      {...buttonProps}
    >
      {icon ? (
        <Icon icon={icon} />
      ) : ''}
      {label}
      {buttons && buttons.length && label ? (
        <Box as="span" mr="-8px" ml="md">
          <Icon icon="CaretDown" />
        </Box>
      ) : ''}
    </StyledSingleButton>
  )
}

export {
  SingleButtonInGroup as default,
}
