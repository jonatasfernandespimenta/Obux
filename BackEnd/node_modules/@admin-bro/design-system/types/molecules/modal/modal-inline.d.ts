import React from 'react';
import { BoxProps } from '../..';
import { ModalProps } from './modal-props';
/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */
declare const ModalInline: React.FC<ModalProps & Omit<BoxProps, 'variant'>>;
export { ModalInline, ModalInline as default, };
