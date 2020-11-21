<img src="components/button.png" />

Buttons make common actions immediately visible and easy to perform with one click or tap.
They can be used for any type of action.

### Usage

```jsx
import { Button, ButtonCSS } from '@admin-bro/design-system'

// regular button
return (
  <Button>Click Me</Button>
)

// Passing button body as a label
return (
  <Button label="My Button" />
)

// create a new Component looking like button
const ButtonLikeComponent = styled.a`
  ${ButtonCSS};
`

return (
  <ButtonLikeComponent href="#">My styled link</ButtonLikeComponent>
)
```

### Props

The Button Component takes 4 custom props:

- `variant`
- `size`
- `rounded`
- `label`

Apart from them you can also pass {@link ColorProps}, {@link SpaceProps}
and {@link TypographyProps}. See {@link ButtonProps} below.

### Examples

1 .Color variants

```reactComponent
const variants = ['primary', 'danger', 'success', 'info', 'secondary', 'text', 'light']
return (
<Box py="lg">
  <Button mb="default" mr="default">default</Button>
  {variants.map(variant => (
    <Button mb="default" variant={variant} mr="default">{variant}</Button>
  ))}
</Box>
)
```

2. Size variants

```reactComponent
return (
<Box py="lg">
  <Button size="sm">Small</Button>
  <Button ml="default">Regular size</Button>
  <Button size="lg" ml="default">Large</Button>
</Box>
)
```

3. Icons

```reactComponent
return (
<Box py="lg">
 <Button mr="default">
   <Icon icon="Settings" />
   With icon
 </Button>
 <Button size="icon" mr="default"><Icon icon="Settings" /></Button>
 <Button rounded size="icon" mr="default"><Icon icon="Settings" /></Button>
 <Button variant="danger" mr="default">
   <Icon icon="Delete" />
   Delete me
 </Button>
 <Button mr="default" variant="text" size="sm">
   <Icon icon="Add" />
   Create new item
 </Button>
</Box>
)
```

4. State

```reactComponent
return (
<Box py="lg">
  <Button disabled>Disabled</Button>
  <Button ml="default" variant="primary" disabled>Disabled</Button>
</Box>
)
```