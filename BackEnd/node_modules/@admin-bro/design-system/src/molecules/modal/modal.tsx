/* eslint-disable max-len */
import React from 'react'
import PortalUtils from '../../utils/portal-utils'
import ModalWrapper from './modal-wrapper'
import { ModalProps } from './modal-props'

const ModalPortal = PortalUtils.createPortalForKey('MODAL', ModalWrapper)

/**
 * @load ./modal.doc.md
 * @component
 * @subcategory Molecules
 * @section design-system
 * @hideconstructor
 * @new In version 3.3
 */
const Modal: React.FC<ModalProps> = (props) => (
  <ModalPortal {...props} />
)

export {
  Modal,
  Modal as default,
}
