An entire AdminBro interface is built with 2 main packages:

- [styled-components]{@link https://styled-components.com/} backed by
- [styled-system]{@link https://styled-system.com/}. 

The core of the style information is the {@link Theme}. It is base on the
[Theme Specification]{@link https://styled-system.com/theme-specification/} and
it is used by almost all the components provided by AdminBro.

The structure of the Theme is as follows:

```javascript
const theme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  sizes,
  space,
}
```

Each element controls a different kind of props passed to the Design System Components.



So let's say you would like to create a box with the same background as our
`primary100` color. This is one way of achieving that:

```javascript
import styled from 'styled-components'
import { Box } from '@admin-bro/design-system'

const MyBlueBox = styled(Box)`
  background: ${({ theme }) => theme.colors.primary100};
  // other css styles you want to override.
`
```

> There is a helper function {@link themeGet} which can be used to fetch the data from Theme.

But, since AdminBro uses [styled-system]{@link https://styled-system.com/}, you also can achieve
a similar result by passing a `bg` Prop to the [Box Component]{@link Box},
everything because Box supports all the {@link ColorProps}.

```javascript
import { Box } from '@admin-bro/design-system'

const ComponentWhereIWantToUseBlueBox = () => (
  <Box bg="primary100">
  ...
  </Box>
)
```

The last way of accessing the theme is to use withTheme HOC provided by
[styled-components]{@link https://styled-components.com/}

```javascript
import { withTheme } from 'styled-components'

const MyComponent = (props) => {
  const { theme } = props
  // theme.colors.primary100
}

export default withTheme(MyComponent)
```

{@link ColorProps} is only one of the extensions we provided. Take a look at the documentation
below to see all possible options,


### Responsive styles

You can pass an array instead of value to props to define how behaves in in different breakpoints.

so passing `[1, 1/2, 0.4]` as `width` will width for a following breakpoints:

- <= 577px: 100%
- 578px-769px: 50%
- \>= 769px: 40%

Combined with {@Box} and {@FlexProps} creates a tool to build entire layouts.

Take a look at this example:

```javascript
import { Box } from '@admin-bro/design-system'

const ComponentWhereIWantToUseResponsiveStyle = () => (
  <Box flex flexDirection="column">
    <Box width={[1, 1/2, 1/3]}>Sidebar</Box>
    <Box width={[1, 1/2, 2/3]}>Content</Box>
  </Box>
)
```

Above we defined that the Sidebar box should have 100% width until the viewport reaches the first
breakpoint, then 50% (until the next breakpoint) and then 1/3rd of the page for the remaining 2
breakpoints.

You can read more about responsive features on `styled-system` 
{@link https://styled-system.com/responsive-styles}

<style>
.shadow-div { display: block; width: 80px; height: 80px;}
.space-box { display: inline-block; height: 20px; background: #4268F6; vertical-align: middle;}
</style>