This package consists of all DesignSystem components from [AdminBro](adminbro.com) so you can
use all of them outside the `admin-bro` core.

## Installation outside the AdminBro

```bash
yarn add styled-components @admin-bro/design-system
```

Optionally, if you use typescript, you might want to install types for `styled-components`

```bash
yarn add --dev @types/styled-components
```

Design System needs a `theme` so to use it you have to use `ThemeProvider` from
`styled-components` like this:

```javascript
import { ThemeProvider } from 'styled-components'

// theme is the default theme, which you can alter
import { theme, Button, Box, Icon, Reset } from '@admin-bro/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Box variant="grey">
        <Button><Icon icon="Add" />Click Me</Button>
        <Button variant='primary' ml="xl">I am important</Button>
      </Box>
    </ThemeProvider>
  );
}

 export default App;
 ```

 `Reset` resets all the default browser styles.

 ## Changing the theme

 The Design System provides you with the default [theme](https://adminbro.com/Theme.html).
 It contains all the parameters like paddings, colors, font, sizes etc. For the list of all
 available parameters take a look at the [Theme spec](https://adminbro.com/Theme.html).

 But nothing stands in a way for you to change the default theme. To do that
 you can use the `combineStyles` method:

 ```jsx
 import { combineStyles } from '@admin-bro/design-system`

 const myTheme = combineStyles({
   colors: {
     primary100: '#000'
   }
 })

 //....
 <ThemeProvider theme={myTheme}>
 //....
 ```

## Global style and the font

The main font for the design system is "Roboto". The Default version in OS might not have all the
font-weights. That is why you should import it in your head:

 ```html
 <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
 ```

 ## Changing particular components

 Sometimes you might want to change the look and feel of a particular component -
 not the entire theme. You can achieve that with the `styled` method:

 ```jsx
 import { Button } from '@admin-bro/design-system'
 import styled from 'styled-components'

 const MyRoundedButton = styled(Button)`
   border-radius: 10px;
 `
 ```

 and then you can use it like a normal button component:

 ```jsx
 <MyRoundedButton variant="primary">Rounded I am</MyRoundedButton>
 ```

 ## Components

 All the components were placed in the sidebar. They are divided to Atoms, Molecules and Organisms.

 ## Bundled packages

 This npm package comes with the bundled versions as well. You can find them under:

 - `node_modules/@admin-bro/design-system/bundle.development.js`
 - `node_modules/@admin-bro/design-system/bundle.production.js` (minified)

 (they can also be bundled by using `bundle`
 script: `yarn bundle` or `NODE_ENV=production yarn bundle`)

 In order to use them you will have to host them (put to your 'public' folder) and then put them
 into the HEAD of your page:

 ```html
 <head>
 <!-- ... -->
 <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
 <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.1.1/styled-components.js"></script>
 <script crossorigin src="/bundle.development.js"></script>
 <!-- ... -->
 </head>
 ```

 ## Contribute

 If you find any UI errors - feel free to create a PR.

 ## Storybook

 Inside the repository, there is a storybook folder containing all the stories.
 To run it go inside and:

 ```bash
 yarn install
 yarn storybook
 ```
