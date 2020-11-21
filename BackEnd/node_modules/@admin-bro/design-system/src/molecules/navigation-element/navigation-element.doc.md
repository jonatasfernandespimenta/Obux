<img src="components/navigation-element.png" />

This component is responsible for rendering elements on the sidebar navigation.

### Usage

```javascript
import { NavigationElement } from '@admin-bro/design-system'

return (
  <NavigationElement
    href="#"
    open={true}
    isSelected={false}
    icon='Car'
    label="Cars"
    onClick={(event, props) => {console.log(event, props)}}
  />
)
```

### Prop types

By default all the data are passed via {@link NavigationElementProps} - check them out below.


### Example

This is a working example of a NavigationElement:

```reactComponent
    const MyComponent = () => {
    const [isSelected, setIsSelected] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const icon = 'Car'
    const label = 'Cars'
    
    const onClickHandler = (event) => {
     event.preventDefault()
     console.log(isOpen)
     setIsOpen(!isOpen)
    }

    return (
      <Box>
        <NavigationElement
          href="#"
          isOpen={isOpen}
          isSelected={isSelected}
          icon='Car'
          label="Cars"
          onClick={onClickHandler}
        />
        {isOpen ? (
          <Text p="md">some data below. You can also nest NavigationElements</Text>
        ) : ''}
        <NavigationElement
          href="#"
          icon='ShoppingCart'
          label="Orders"
          onClick={(event) => event.preventDefault()}
        />
      </Box>
    )
  }
return (
  <MyComponent />
)
```
