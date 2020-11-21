import React from 'react'
import { withKnobs, select, object } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'

import { ButtonGroup, Box } from '../..'
import { CardTitle } from '../../atoms/typography'
import Label from '../../atoms/label'

export default {
  title: 'DesignSystem/Organisms/ButtonGroup',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}
export const Default: React.FC = ({ onClick }) => {
  const size = select('Size variant', ['sm', 'default', 'lg'], 'default')

  const handleClick = (event, source) => {
    event.preventDefault()
    onClick(event, source)
  }

  const buttons = object('objects', [{
    label: 'Edit',
    onClick: handleClick,
    icon: 'Edit',
  }, {
    label: 'Not Clickable',
    source: 'thisWillGoBack',
    icon: 'Copy',
    variant: 'light',
    buttons: [{
      label: 'Option 1',
      onClick: handleClick,
      icon: 'Copy',
      variant: 'primary',
    }, {
      label: 'Option 2',
      onClick: handleClick,
      icon: 'Copy',
      buttons: [{
        label: 'Option 2.1',
        onClick: handleClick,
        icon: 'Copy',
      }, {
        label: 'Option 2.2',
        onClick: handleClick,
        icon: 'Copy',
      }],
    }, {
      label: 'Option 3',
      icon: 'Copy',
    }],
  }, {
    label: 'Delete',
    onClick: handleClick,
    variant: 'danger',
    icon: 'TrashCan',
  }, {
    label: null,
    variant: 'light',
    icon: 'OverflowMenuHorizontal',
    buttons: [{
      label: 'Edit',
      onClick: handleClick,
      icon: 'Edit',
      variant: 'light',
    }, {
      label: 'Duplicate',
      onClick: handleClick,
      icon: 'Copy',
    }, {
      label: 'Delete',
      onClick: handleClick,
      variant: 'danger',
      icon: 'TrashCan',
    }],
  }])

  return (
    <Box variant="grey">
      <Label>ButtonGroup default settings</Label>
      <Box variant="card" mb="xxl">
        <CardTitle>Big buttons</CardTitle>
        <ButtonGroup
          buttons={buttons}
          size={size}
        />
      </Box>
      <Box variant="card">
        <CardTitle>Small buttons</CardTitle>
        <ButtonGroup
          buttons={buttons}
          size="sm"
          rounded
        />
      </Box>
    </Box>
  )
}
