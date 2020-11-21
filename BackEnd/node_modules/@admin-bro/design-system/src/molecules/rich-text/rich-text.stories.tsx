/* eslint-disable react/no-danger */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { withKnobs, boolean } from '../../../storybook/node_modules/@storybook/addon-knobs'

import RichText from './rich-text'
import StoryWrapper from '../../utils/story-wrapper'
import { Text, Box } from '../..'

const html = `
<h1>Hello World</h1>
<h2>Some header 2</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel
interdum mattis neque.
</p>
<ol>
<li>interdum mattis neque.</li>
</ol>
<h2>Second level</h2>
<p>
Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus
facilisis. Donec at dignissim dui. Ut et neque nisl.
</p>
<ul>
<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
<li>Ut non enim metus.</li>
</ul>
<blockquote>
And here it comes - the quote
</blockquote>
<h5>Header H5</h5>
<pre>
const a = 1;{'\n'}
const b = 0;
</pre>
<p>And below there is a Table</p>
<table>
<thead>
<tr><th>Name</th><th>Surname</th></tr>
</thead>
<tbody>
<tr><td>Wojtek</td><td>Krysiak</td></tr>
<tr><td>Joseph</td><td>Grad</td></tr>
</tbody>
</table>
<p>text goes on...</p>
`

export default { title: 'DesignSystem/Molecules/RichText', decorators: [withKnobs] }

export const Snow: React.FC = () => {
  const [value, setValue] = useState(html.replace(/\n/img, ''))
  const ref = useRef()

  const [quill, setQuill] = useState<Quill>(null)

  useEffect(() => {
    if (ref?.current?.__quill) {
      setQuill(ref?.current?.__quill)
    }
  }, [ref?.current?.__quill])

  const insertImageHandler = useCallback(() => {
    console.log({ ref: ref?.current })
  }, [quill, ref?.current])

  const borderless = boolean('borderless', false)
  return (
    <Box width={1}>
      <StoryWrapper label="Rich text editor - SNOW">
        <RichText
          borderless={borderless}
          quill={{
            theme: 'snow',
            modules: {
              toolbar: {
                container: [['bold', 'italic'], ['link', 'image'], ['insertImage']],
                handlers: {
                  insertImage: () => insertImageHandler(),
                },
              },
            },
          }}
          onChange={(content) => setValue(content)}
          value={value}
          ref={ref}
        />
      </StoryWrapper>
      <StoryWrapper label="Text preview">
        <Text><div dangerouslySetInnerHTML={{ __html: value }} /></Text>
      </StoryWrapper>
    </Box>
  )
}

export const Bubble: React.FC = () => {
  const [value, setValue] = useState(html.replace(/\n/img, ''))

  const borderless = boolean('borderless', false)
  return (
    <Box width={1}>
      <StoryWrapper label="Rich text editor - SNOW">
        <RichText
          borderless={borderless}
          quill={{
            theme: 'bubble',
          }}
          onChange={(content) => setValue(content)}
          value={value}
        />
      </StoryWrapper>
      <StoryWrapper label="Text preview">
        <Text><div dangerouslySetInnerHTML={{ __html: value }} /></Text>
      </StoryWrapper>
    </Box>
  )
}
