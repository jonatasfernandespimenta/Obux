<img src="components/modal.png" />

Renders Modal

### Usage:

```javascript
import { Modal, ModalProps, ModalInline } from '@admin-bro/design-system'
```

Modal can be rendered either inline or as a regular Modal.

#### Inline usage

```jsx
  <ModalInline {...modalProps} />
```

#### Modal usage

```jsx
const [isVisible, setIsVisible] = useState(false)
modalProps = {
  /** ... **/
  onOverlayClick: () => setIsVisible(false),
  onClose: () => setIsVisible(false),
}

<Box>
  <Label>Modal Trigger</Label>
  <Button
    onClick={() => setIsVisible(!isVisible)}
  >
    Toggle Modal
  </Button>
  {isVisible && <Modal {...modalProps} />}
</Box>
```

### Passing content

You can also pass the values in 2 ways:

1. by using just the {@link ModalProps} - as shown in the previous examples.
2. by using the **Children**

### Playground

Let me show you 3 live examples of using the Modal component:

#### Passing children

The most versatile way, but, the one, which requires you to "design" the modal

```reactComponent
return (
  <Box variant="grey">
    <Box py="xxl" width={1}>
      <ModalInline>
        <Header.H4>I am header</Header.H4>
        <Text>
          I am info text
        </Text>
        <Box>
          <Button>Confirm?</Button>
        </Box>
      </ModalInline>
    </Box>
  </Box>
)
```

#### Passing props

You have everything out of the box

```reactComponent

const variant = 'danger'

const modalProps = {
  label: 'Someone broke your car',
  icon: 'Car',
  title: 'Behold',
  variant,
  subTitle: 'Something wrong is happening!!!',
  buttons: [
    { label: 'Cancel' },
    { label: 'Delete', variant },
  ],
}

return (
  <Box variant="grey">
    <Box py="xxl" width={1}>
      <ModalInline {...modalProps} />
    </Box>
  </Box>
)
```

#### Real modal

Handling modal visibility with the `useState` hook.

```reactComponent
const Wrapper = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const variant = 'success'

  const modalProps = {
    label: 'Your car is 100% fine',
    icon: 'Car',
    title: 'It is ok',
    variant,
    subTitle: 'Something wrong is NOT happening!!!',
    buttons: [
      { label: 'Cancel' },
      { label: 'Delete', variant },
    ],
    onOverlayClick: () => setIsVisible(false),
    onClose: () => setIsVisible(false),
  }
  return (
    <Box py="100px">
      <Button
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Modal
      </Button>
      {isVisible && <Modal {...modalProps} />}
    </Box>
   )
}

return <Wrapper />
```