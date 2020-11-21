<img src="components/navigation.png" />

Component rendering entire navigation list

### Usage

```javascript
import { Navigation } from '@admin-bro/design-system'

const navigationElements = [{
  label: 'Dashboard',
  icon: 'Dashboard',
  isSelected: true,
  href: '/',
  onClick: () => {},
  id: 'dashboard',
}]

return (
  <Navigation
    label: "Pages",
    elements: navigationElements,
  />
)
```

### Prop types

By default all the data are passed via {@link CurrentUserNavProps} - check them out below.


### Example

#### Full-featured example with all the props

```reactComponent
const MyComponent = () => {
  const label = 'Navigation'

  const [postgresOpen, setPostgresOpen] = React.useState(false)
  const [mongooseOpen, setMongooseOpen] = React.useState(false)
  
  const handleClick = (event) => {
    event.preventDefault()
    console.log(event)
  }
  
  const navigationElements = [{
    label: 'Dashboard',
    icon: 'Dashboard',
    isSelected: true,
    href: '/',
    onClick: handleClick,
    id: 'dashboard',
  }, {
    label: 'Postgres with long name and spaces',
    icon: 'Sql',
    onClick: (event) => {
      event.preventDefault()
      setPostgresOpen(!postgresOpen)
    },
    isOpen: postgresOpen,
    elements: [{
      label: 'Users',
      href: '/resources/Users/list',
      onClick: handleClick,
      id: 'users',
    }, {
      label: 'Posts',
      href: '/resources/Posts/list',
      onClick: handleClick,
      id: 'posts',
    }, {
      label: 'Messages',
      href: '/resources/Messages/list',
      onClick: handleClick,
      id: 'messages',
    }, {
      label: 'Calendar',
      href: '/resources/Calendar/list',
      onClick: handleClick,
      id: 'calendar',
    }],
  }, {
    label: 'MongooseWithLongNameAndWithoutSpaces',
    icon: 'Datastore',
    isOpen: mongooseOpen,
    onClick: (event) => {
      event.preventDefault()
      setMongooseOpen(!mongooseOpen)
    },
    elements: [{
      label: 'Car',
      href: '/resources/Cars/list',
      onClick: handleClick,
      id: 'car',
    }, {
      label: 'Dealers',
      href: '/resources/Dealers/list',
      onClick: handleClick,
      id: 'dealers',
    }, {
      label: 'Owners',
      href: '/resources/Owners/list',
      onClick: handleClick,
      id: 'owners',
    }, {
      label: 'Orders',
      href: '/resources/Orders/list',
      onClick: handleClick,
      id: 'orders',
    }],
  }]

  return (
    <Box variant="grey" height="500px">
      <Label>Navigation example</Label>
      <Box width="sidebarWidth" border="bg" bg="white">
        <Navigation elements={navigationElements} label={label} />
      </Box>
    </Box>
  )
}

return <MyComponent />
```