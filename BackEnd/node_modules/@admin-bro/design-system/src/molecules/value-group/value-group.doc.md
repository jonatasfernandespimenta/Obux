<img src="components/value-group.png" />

ValueGroup is the way of styling all {key: value} properties from your database. It
maintains paddings and adds errors.

### Usage

```javascript
import { ValueGroup } from '@admin-bro/design-system'

return (
  <ValueGroup
    value={'wojciech.krysiak@softwarebrothers.co'}
    label={'email address'}
  />
)
```

### Prop types

By default all the data are passed via {@link ValueGroupProps} - check them out below.


### Example

#### Example styling for a form with headers and ValueGroup

```reactComponent
    const Bio = (
    <div>
    <p>
      Co-founder and CTO at Software Brothers He graduated from 2 faculties at 2008: Electronic followed by Marketing and Management.
    </p>
    <p>
      He's been working in IT industry since then. During that time he've built dozens of products for biggest brands, such as Coca-Cola or Canal+.
    </p>
    <p>He also created solutions for different international startups having hundreds of thousands of users. Now, apart from being a CTO of Software Brothers, Wojtek focuses on teaching developers how to code by giving keynotes, providing open source solutions on GitHub and running a jscasts.tv youtube channel.
    </p>
    </div>
  )
  
  const values = [
    { label: "Email", value: 'wojciech.krysiak@softwarebrothers.co' },
    { label: "Name", value: 'Wojciech' },
    { label: "Surname", value: 'Krysiak' },
    { label: "Gender", value: 'Male' },
    { label: "Age", value: 'You wish you know' },
  ]

  return (
    <Box width={[1, 3/4]} margin="auto">
      <Header.H3>User Data</Header.H3>
      <Box flex>
        <Box width={2/5}>
          {values.map( val => (
            <ValueGroup key={val.label} {...val} />
          ))}
        </Box>
        <Box width={3/5}>
          <ValueGroup label="Bio">
            <Text>{Bio}</Text>
          </ValueGroup>
        </Box>
      </Box>
    </Box>
  )
```