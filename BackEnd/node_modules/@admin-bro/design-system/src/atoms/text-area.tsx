import styled from 'styled-components'
import { space, typography, layout, TypographyProps } from 'styled-system'
import { InputCSS, InputProps } from './input'
import { cssClass } from '../utils/css-class'

/**
 * Prop Types of a TextArea component.
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps}
 * @memberof TextArea
 * @alias TextAreaProps
 * @property {string} [...] All props default to _textarea_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */
export type TextAreaProps = TypographyProps & InputProps

/**
 * @classdesc
 *
 * <img src="components/textarea.png" />
 *
 * Wrapped `textarea` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { TextArea, TextAreaProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-textarea--default Storybook}
 * @see TextAreaProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const TextArea = styled.textarea<TextAreaProps>`
  ${InputCSS}
  ${space};
  ${layout};
  ${typography};
`

TextArea.defaultProps = {
  px: 'default',
  py: 'default',
  fontSize: 'lg',
  className: cssClass('TextArea'),
}

export { TextArea }
export default TextArea
