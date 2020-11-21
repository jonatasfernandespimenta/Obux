<img src="components/badge.png" />

Component representing a badge.

### Usage

```typescript
import { Badge } from '@admin-bro/design-system'

const MyComponent = () => (
  <Badge>My badge</Badge>
)
```

### Props

The Badge Component takes 3 custom props:

- `variant`
- `outline`
- `size`

Apart from them you can also pass {@link ColorProps}, {@link SpaceProps} and {@link TypographyProps}.
See {@link BadgeProps} below.

### Examples

Check out the following examples.

1. Mixed versions

```reactComponent
return (
  <Box py="lg">
    <Badge variant="primary" size="lg">My badge</Badge>
    <Badge variant="danger" size="sm" outline ml="xl">Danger Danger</Badge>
    <Badge variant="success" ml="xl">Success</Badge>
  </Box>
)
```

2. Outline

```reactComponent
const variants = ['primary', 'danger', 'success', 'info', 'secondary']
return (
<Box py="lg">
  <Badge mb="default" mr="default" outline>default</Badge>
  {variants.map(variant => (
    <Badge mb="default" variant={variant} mr="default" outline>{variant}</Badge>
  ))}
</Box>
)
```

3. Different sizes

```reactComponent
return (
<Box py="lg">
  <Badge ml="default" variant="primary" size="sm">small</Badge>
  <Badge ml="default" variant="primary">regular</Badge>
  <Badge ml="default" variant="primary" size="lg">large</Badge>
</Box>
)
```

4. Color variants

```reactComponent
const variants = ['primary', 'danger', 'success', 'info', 'secondary']
return (
<Box py="lg">
  <Badge mb="default" mr="default">default</Badge>
  {variants.map(variant => (
    <Badge mb="default" variant={variant} mr="default">{variant}</Badge>
  ))}
</Box>
)
```

4. Mixed with other elements

```reactComponent
return (
<Box py="lg">
  <Header.H3>I am the header<Badge ml="default" mr="default">Count: 50021</Badge></Header.H3>
</Box>
)
```
