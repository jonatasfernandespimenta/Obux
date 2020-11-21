# @admin-bro/design-system

This package consists of all DesignSystem components from [AdminBro](adminbro.com) so you can use all of them outside the `admin-bro` core.

It was created with the help of 2 amazing packages:

- [styled-components](styled-components.com) which is a peerDependency
- [styled-system](styled-stystem.com)

make sure to check them out to use the full potential of this design system.

## Installation

```sh
yarn add styled-components @admin-bro/design-system
```

Optionally, if you use typescript, you might want to install types for `styled-components`

```
yarn add --dev @types/styled-components
```

Design System needs a `theme` so in order to use it you have to use `ThemeProvider` from `styled-components` like this:

```
import { ThemeProvider } from 'styled-components'

// theme is the default theme, which you can alter
import { theme, Button, Box, Icon } from '@admin-bro/design-system'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box variant="grey">
        <Button><Icon icon="Add" />Click Me</Button>
        <Button variant='primary' ml="xl">I am important</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
```

## Changing theme

Design System provides you with the default [theme](https://adminbro.com/Theme.html). It contains all the parameters like paddings, colors, font sizes etc. For the list of all available parameters take a look at the [Theme spec](https://adminbro.com/Theme.html).

But nothing stands in a way for you to change the default theme. In order to do that you can use `combineStyles` method:

```
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

## Changing particular components

Sometimes you might want to change the look and feel of a particular component - not the entire theme. You can achieve that with `styled` method:

```
import { Button } from '@admin-bro/design-system'
import styled from 'styled-components'

const MyRoundedButton = styled(Button)`
  border-radius: 10px;
`
```

and then you can use it like a normal button component:

```
<MyRoundedButton variant="primary">Rounded I am</MyRoundedButton>
```

## Components

For the list off all the components and their documentation go to [adminbro.com](adminbro.com)

## Bundled packages

This npm package comes with the bundled versions as well. You can find them under:

- `node_modules/@admin-bro/design-system/bundle.development.js`
- `node_modules/@admin-bro/design-system/bundle.production.js` (minified)

(they can also be bundled by using `bundle` script: `yarn bundle` or `NODE_ENV=production yarn bundle`)

In order to use them you will have to host them (put to your 'public' folder) and then put them into the HEAD of your page:

```
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

Inside the repo there is a storybook folder containing all the stories. In order to run it go inside and:

```
cd storybook
yarn install
yarn storybook
```

## License

AdminBro is Copyright © 2020 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [MIT LICENSE](LICENSE.md) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://softwarebrothers.co/contact).
* If you want to work for us - checkout the [career page](https://softwarebrothers.co/career).