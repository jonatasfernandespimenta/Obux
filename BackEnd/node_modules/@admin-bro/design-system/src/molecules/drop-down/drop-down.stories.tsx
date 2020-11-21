import React from 'react'
import {
  Badge,
  Box,
  Text,
  DropDown,
  DropDownTrigger,
  DropDownMenu,
  DropDownItem,
  Button,
  Icon,
} from '../..'
import { withKnobs, radios } from '../../../storybook/node_modules/@storybook/addon-knobs'
import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Molecules/DropDown',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Default: React.FC = ({ onClick }) => {
  const stick = radios('stick', ['left', 'right'] as any, 'left')
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  return (
    <StoryWrapper label="Button trigger with nested DropDownItems">
      <DropDown stick={stick}>
        <DropDownTrigger>
          <Button>Get your cursor here!</Button>
        </DropDownTrigger>
        <DropDownMenu>
          <DropDownItem onClick={handleClick}>
            <Icon icon="Video" />
            Some menu item
          </DropDownItem>
          <DropDownItem onClick={handleClick}>
            <Icon icon="Audio" />
            Other item
            <DropDownMenu>
              <DropDownItem onClick={handleClick} colorVariant="danger">
                <Icon icon="Edit" />
                Some danger item
              </DropDownItem>
            </DropDownMenu>
          </DropDownItem>
        </DropDownMenu>
      </DropDown>
    </StoryWrapper>
  )
}

export const Custom: React.FC = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  return (
    <StoryWrapper label="Badge trigger with TextContent">
      <DropDown>
        <DropDownTrigger>
          <Badge>Get your cursor here!</Badge>
        </DropDownTrigger>
        <DropDownMenu>
          <Box p="xxl" width={300}>
            <Text>
              <h3>I am inside dropdown Menu</h3>
              <Button onClick={handleClick}>Click me if you dare</Button>
            </Text>
          </Box>
        </DropDownMenu>
      </DropDown>
    </StoryWrapper>
  )
}
