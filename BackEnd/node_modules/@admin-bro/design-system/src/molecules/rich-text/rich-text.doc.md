<img src="components/rich-text.png" />

RichText editor based on Quill.

### Usage

```javascript
import { RichText, DefaultQuillToolbarOptions } from '@admin-bro/design-system'

const MyComponent = () => {
  const [value, setValue] = React.useState("Welcome")

  return (
    <RichText
      quill={{
        theme: 'snow',
        modules: [
          toolbar: DefaultQuillToolbarOptions,
        ]
      }}
      value={value}
      onChange={ setValue }
    />
  )
}
```

### Prop types

By default all the data are passed via {@link RichTextProps} - check them out below.


### Example

#### Default version in "snow" theme

```reactComponent
const MyComponent = () => {
  return (
    <RichText
      quill={{ theme: 'snow' }}
    />
  )
}

return (
  <Box pb="x4"><MyComponent /></Box>
)
```


#### Fancy version without the border

```reactComponent
const MyComponent = () => {
  return (
    <RichText
      borderless={true}
      quill={{ theme: 'snow' }}
    />
  )
}

return (
  <Box pb="x4"><MyComponent /></Box>
)
```