import React from 'react'
import { withKnobs, boolean, number, array, select } from '../../../storybook/node_modules/@storybook/addon-knobs'
import { DropZone } from '../..'

export default { title: 'DesignSystem/Molecules/DropZone', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const multiple = boolean('If drop zone should handle multiple uploads', false)
  const maxSize = number('Maximum size of the uploaded file in bytes. If not defined - all files are allowed', NaN)
  const mimeTypes = array('Available mime types (separate by ","). When not defined - all mime types are allowed', ['application/pdf'])
  const uploadLimitIn = select('Upload limit display', ['B', 'KB', 'MB', 'GB', 'TB'], 'KB')
  return (
    <DropZone
      multiple={multiple}
      validate={{
        maxSize,
        mimeTypes,
      }}
      uploadLimitIn={uploadLimitIn}
    />
  )
}
