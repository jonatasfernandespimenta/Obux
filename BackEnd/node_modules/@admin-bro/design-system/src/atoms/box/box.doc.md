<img src="components/box.png" />

The Main component allowing you to define an entire layout of the application.
It is one of the most powerful tools in the Design System. Thanks to multiple {@link BoxProps}
it can serve as the main wrapper for your content or as the layout building block.

### Usage

```javascript
import { Box } from '@admin-bro/design-system'
```

### Props

Apart from the props extended by the @styled-system:

- {@link SpaceProps}, 
- {@link ColorProps}
- {@link LayoutProps},
- {@link FlexboxProps}, 
- {@link PositionProps}
- {@link BorderProps} 
- and {@link ShadowProps}.

it introduced 3 new props: flex, variant, animate. See {@link BoxProps} for more details.

### Flex

One of the most used cases is to use Box as a flex container. Let me give you an example of how
to do this with `flex` prop.

```reactComponent
return (
<Box flex flexDirection="column">
  <Box flex>
    <Box bg="primary20" p="md" width={1/3}>Left Content</Box>
    <Box bg="primary20" p="md" flexGrow={1}>Right Content</Box>
  </Box>
  <Box flex p="xxl" borderBottom="default">
    Bottom Content
  </Box>
</Box>
)
```

### Other examples

1. Simple White/Gray wrapper

```reactComponent
return (
<Box variant="grey">
  <Box variant="white">
    <Text>This is the default wrapper in the application</Text>
  </Box>
</Box>
)
```

2. Positioning buttons

```reactComponent
return (
<Box variant="grey">
  <Box variant="white" flex flexDirection="row">
    <Box flexGrow={1}>
      <Header.H3>Some header</Header.H3>
    </Box>
    <Box flexShrink={0}>
      <Button>Example Button On The Right</Button>
    </Box>
  </Box>
</Box>
)
```