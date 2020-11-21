import React, { useState } from 'react'
import { radios, text, withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs'

import { ModalInline, Box, Label, Button, Modal, VariantValues } from '../..'

export default { title: 'DesignSystem/Molecules/Modal', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const variant = radios('Variant',
    VariantValues.reduce((memo, el) => ({ ...memo, [el]: el }), {}),
    'default')
  const title = text(
    'title',
    'Are you sure you want to delete this car?',
  )
  const subTitle = text(
    'subTitle',
    'This item will be deleted immediately. You can’t undo this action.',
  )
  const label = text('label', 'Warning')
  const icon = text('icon', 'Warning')

  const modalProps = {
    label,
    icon,
    title,
    variant,
    subTitle,
    onOverlayClick: () => setIsVisible(false),
    onClose: () => setIsVisible(false),
    buttons: [
      { label: 'Cancel' },
      { label: 'Delete', variant },
    ],
  }

  return (
    <Box variant="grey">
      <Label>Inline modal: ModalInline</Label>
      <Box py="xxl" width={1}>
        <ModalInline {...modalProps} />
      </Box>
      <Box>
        <Label>Modal Trigger</Label>
        <Button
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Modal
        </Button>
        {isVisible && <Modal {...modalProps} />}
      </Box>
    </Box>
  )
}
