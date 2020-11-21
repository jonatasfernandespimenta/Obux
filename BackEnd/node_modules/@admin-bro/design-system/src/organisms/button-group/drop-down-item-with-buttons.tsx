import React from 'react'

import Icon from '../../atoms/icon'
import {
  DropDownMenu,
  DropDownItem,
} from '../../molecules/drop-down'
import { StyledDropDownItemAction } from './button-group.styled'
import { ButtonInGroupProps } from './button-group.types'

export const DropDownItemWithButtons: React.FC<ButtonInGroupProps> = (props) => {
  const { variant, onClick, href, icon, label, buttons, source, ...rest } = props
  const onClickHandler = onClick ? (event) => onClick(event, source) : undefined

  return (
    <DropDownItem
      colorVariant={variant}
      p={0}
    >
      <StyledDropDownItemAction
        onClick={onClickHandler}
        href={href}
        as="a"
        hasLabel={!!label}
        {...rest}
      >
        {buttons && buttons.length ? (
          <Icon icon="CaretLeft" ml="-24px" mr="0" />
        ) : ''}
        {icon ? <Icon icon={icon} /> : ''}
        {label}
      </StyledDropDownItemAction>
      {buttons && buttons.length ? (
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons {...button} key={button.label} />
          ))}
        </DropDownMenu>
      ) : ''}
    </DropDownItem>
  )
}

export {
  DropDownItemWithButtons as default,
}
