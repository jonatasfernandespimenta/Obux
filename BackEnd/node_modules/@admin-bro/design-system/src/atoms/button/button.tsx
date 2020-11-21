import styled, { css } from 'styled-components'

import { ButtonProps } from './button-props'
import ButtonCSS from './button-css'
import { cssClass, themeGet } from '../../utils'

const addContent = css<ButtonProps>`
  &:before {
    content: "${({ label }) => label}";
  }
`

/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */

const Button = styled.button.attrs((props) => ({
  className: cssClass('Button', props.className),
}))<ButtonProps>`
  font-size: ${themeGet('fontSizes', 'default')};
  background-color: transparent;
  ${ButtonCSS};
  ${({ label }) => (label ? addContent : '')};
`

export { Button }
export default Button
