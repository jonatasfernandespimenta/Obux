import React from 'react'
import { BoxProps, Box, H5, Text, Button, Icon, Label } from '../..'
import { ModalProps } from './modal-props'
import { ModalStyled } from './modal-styled'

/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */
const ModalInline: React.FC<ModalProps & Omit<BoxProps, 'variant'>> = (props) => {
  const { title,
    subTitle,
    variant,
    onClose,
    children,
    buttons,
    label,
    icon,
    ...boxProps
  } = props
  return (
    <ModalStyled variant={variant as BoxProps['variant']} {...boxProps}>
      {label && (
        <Label size="lg" variant={variant} className="modal-label">
          {icon && (<Icon icon={icon} />)}
          {label}
        </Label>
      )}
      {title && <H5>{title}</H5>}
      {onClose && (
        <Button
          className="close-button"
          size="icon"
          variant="text"
          onClick={onClose}
          rounded
        >
          <Icon icon="CloseOutline" />
        </Button>
      )}
      {subTitle && <Text>{subTitle}</Text>}
      {children}
      {buttons && buttons.length && (
        <Box flex flexDirection="row" justifyContent="flex-end">
          {buttons.map((buttonProps, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={key} mr="md" mt="sm" {...buttonProps} />
          ))}
        </Box>
      )}
    </ModalStyled>
  )
}

export {
  ModalInline,
  ModalInline as default,
}
