<img src="components/button-group.png" />

The component which renders Buttons in a group. It allows you to handle an array of actions.

### Usage

```javascript
import { ButtonGroup } from '@admin-bro/design-system'
```

### Props

ButtonGroup can be configured with the default props like `size` or `rounded` passed to all
the Buttons via {@link ButtonInProps}. These props can be changed for each button by using
{@link ButtonInGroupProps}

### Full featured example

This is a full featured example with lots of buttons.

```reactComponent

const rounded = false
const size = 'default'

const handleClick = (event, source) => {
  alert('clicked')
}

const buttons = [{
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
}]

return (
  <Box height={200}>
    <ButtonGroup buttons={buttons} rounded={rounded} size={size} />
  </Box>
)
```