import React from 'react'
import {
  DropDown,
  DropDownMenu,
  DropDownTrigger,
} from '../../molecules/drop-down'
import { SingleButtonInGroup } from './single-button-in-group'
import { DropDownItemWithButtons } from './drop-down-item-with-buttons'
import { ButtonInGroupProps } from './button-group.types'

export const ButtonInGroup: React.FC<ButtonInGroupProps> = (props) => {
  const { buttons, className, ...buttonProps } = props

  if (buttons && buttons.length) {
    return (
      <DropDown stick="right" className={className}>
        <DropDownTrigger>
          <SingleButtonInGroup {...props} />
        </DropDownTrigger>
        <DropDownMenu>
          {buttons.map((button) => (
            <DropDownItemWithButtons
              {...button}
              key={`${button.label}-${button.icon}`}
            />
          ))}
        </DropDownMenu>
      </DropDown>
    )
  }

  return <SingleButtonInGroup {...buttonProps} className={className} />
}

export {
  ButtonInGroup as default,
}
