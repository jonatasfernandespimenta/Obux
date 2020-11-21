<img src="components/current-user-nav.png" />

Component rendering current user top-right menu.

### Usage

```javascript
import { CurrentUserNav } from '@admin-bro/design-system'

return (
  <CurrentUserNav
    name={name}
    title={title}
    avatarUrl={avatar}
    dropActions={dropActions}
    lineActions={lineActions}
  />
)
```

### Prop types

By default all the data are passed via {@link CurrentUserNavProps} - check them out below.


### Example

#### Full-featured example with all the props

```reactComponent
  const name = 'Wojtek'
  const title = 'Master admin'
  const avatar = 'https://api.adorable.io/avatars/285/abott@adorable.png'

  const handleClick = (event) => {
    event.preventDefault()
  }

  const dropActions = [{
    label: 'My Profile',
    onClick: handleClick,
    icon: 'User',
  }, {
    label: 'log out',
    onClick: handleClick,
    icon: 'Logout',
  }]

  const lineActions = [{
    label: 'Notification',
    onClick: handleClick,
    icon: 'NotificationNew',
  }, {
    label: 'Settings',
    onClick: handleClick,
    icon: 'Settings',
  }]

  return (
    <Box pt="xxl" pb="x4">
      <Box border="default" flex flexDirection="row-reverse" height="navbarHeight">
        <CurrentUserNav
          name={name}
          title={title}
          avatarUrl={avatar}
          dropActions={dropActions}
          lineActions={lineActions}
        />
      </Box>
    </Box>
  )
```