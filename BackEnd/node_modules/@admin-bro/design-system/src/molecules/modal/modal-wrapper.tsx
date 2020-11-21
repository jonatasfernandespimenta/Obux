import React from 'react'
import styled from 'styled-components'

import { ModalInline } from './modal-inline'
import { ModalProps } from './modal-props'
import { ModalStyled } from './modal-styled'
import Box from '../../atoms/box/box'
import Overlay from '../../atoms/overlay'

const Wrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${ModalStyled} {
    z-index: 1001;
  }
`

const ModalWrapper: React.FC<ModalProps> = (props) => {
  const { onOverlayClick, ...otherProps } = props

  const handleOverlayClick = onOverlayClick || (() => true)

  return (
    <Wrapper flex justifyContent="center" alignItems="center">
      <Overlay onClick={handleOverlayClick} />
      <ModalInline {...otherProps} />
    </Wrapper>
  )
}

export {
  ModalWrapper,
  ModalWrapper as default,
}
