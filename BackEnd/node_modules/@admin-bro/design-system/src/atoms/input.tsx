import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { space, SpaceProps, layout, LayoutProps, variant } from 'styled-system'
import focusShadowStyle from '../utils/focus-shadow.style'
import { cssClass } from '../utils/css-class'

const borderlessCSS = css`
  padding: 0;
  border-color: transparent;
  border-width: 0 0 1px 0;
  color: ${({ theme }) => theme.colors.grey100};
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${({ theme }): string => theme.colors.inputBorder};
  }

  &:hover {
    cursor: pointer;
  }
`

const sizeVariants = variant({
  prop: 'variant',
  variants: {
    default: {
      fontSize: 'default',
      lineHeight: 'lg',
    },
    sm: {
      fontSize: 'sm',
      lineHeight: 'default',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: 'xl',
    },
    xl: {
      fontSize: 'xl',
      lineHeight: 'xxl',
    },
    xxl: {
      fontSize: 'h1',
      fontWeight: 'light',
      lineHeight: 'x4',
    },
  },
})

/**
 * Input CSS Styles which can be reused in another input component with styled-components
 *
 * ### Usage:
 *
 * ```
 * import { InputCSS } from '@admin-bro/design-system'
 *
 * const MyStyledInput = styled.input`
 *   ${InputCSS}
 * `
 * ```
 * @memberof Input
 * @alias InputCSS
 */
export const InputCSS = css<InputProps>`
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.grey80};
  background: transparent;
  border: 1px solid ${({ theme }): string => theme.colors.inputBorder};
  font-size: ${({ theme }): string => theme.fontSizes.default};
  line-height: ${({ theme }): string => theme.lineHeights.lg};
  font-family: ${({ theme }): string => theme.font};
  outline: none;
  &:hover {
    border-color: ${({ theme }): string => theme.colors.grey60};
  }
  &:focus {
    border-color: ${({ theme }): string => theme.colors.primary100};
    ${({ theme }): string => `box-shadow: ${focusShadowStyle(theme)}`};
  }
  &:disabled {
    color: ${({ theme }): string => rgba(theme.colors.grey80, 0.5)};
    border-color: ${({ theme }): string => rgba(theme.colors.inputBorder, 0.5)};
  }

  ${({ borderless }): any => (borderless ? borderlessCSS : '')};
  ${sizeVariants};
`

/**
 * Prop Types of an Input component.
 * Apart from variant it extends all {@link LayoutProps} and {@link SpaceProps}
 *
 * @memberof Input
 * @alias InputProps
 * @property {string} [...] Other props from {@link LayoutProps}, {@link SpaceProps}
 */
export type InputProps = SpaceProps & LayoutProps & {
  borderless?: boolean;
  variant?: 'sm' | 'lg' | 'xl' | 'default' | 'xxl';
}

/**
 * @classdesc
 *
 * <img src="components/input.png" />
 *
 * Wrapped `input` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Input, InputProps, InputCSS } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see InputProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-input--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const Input = styled.input<InputProps>`
  ${InputCSS};
  ${space};
  ${layout};
`

Input.defaultProps = {
  px: 'default',
  py: 'sm',
  className: cssClass('Input'),
}

export { Input }
export default Input
