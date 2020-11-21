<img src="components/tooltip.png" />

Renders Tooltip

### Usage

```jsx
import { Tooltip, TooltipContent } from '@admin-bro/design-system'

// Wrapping existing element with a tooltip
return (
  <Box>
    <Tooltip title="I am tooltip">
      <Button>I am tooltip</Button>
    </Tooltip>
  </Box>
)

// Adding more complicated content
return (
  <Box>
    <Tooltip>
      <TooltipContent>
        <Text>I am text inside with <strong>BoldedText</strong></Text>
      </TooltipContent>
      <Button>I am tooltip</Button>
    </Tooltip>
  </Box>
)
```

As you can see on the examples, there are 2 ways of passing tooltip message:

1. by the `title` prop
2. by the TooltipContent component

The first way is the easiest, but the second allows you to put whatever styled content you like.

### Props

The Tooltip Component takes 3 custom props:

- `title`
- `direction` - default to `bottom`
- `size`

See {@link TooltipProps} below.

### Example

1. Direction and title

```reactComponent
return (
  <Box p="xxl">
    <Tooltip title="example info" direction="right">
     <Button>indicator</Button>
    </Tooltip>
  </Box>
)
```
