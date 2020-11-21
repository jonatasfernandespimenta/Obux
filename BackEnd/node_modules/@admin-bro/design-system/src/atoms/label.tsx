import styled, { css, DefaultTheme, ThemedCssFunction } from 'styled-components'
import {
  color, space,
  SpaceProps,
  TypographyProps,
  typography,
  variant,
} from 'styled-system'
import { cssClass } from '../utils/css-class'
import themeGet from '../utils/theme-get'
import { ColorProps } from '../utils/color-props'
import { VariantType } from '../theme'

export type LabelVariantType = VariantType

const labelVariants = variant<any, LabelVariantType>({
  variants: {
    primary: {
      color: 'primary100',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'primary100',
      },
    },
    danger: {
      color: 'error',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'error',
      },
    },
    success: {
      color: 'success',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'success',
      },
    },
    info: {
      color: 'info',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'info',
      },
    },
    secondary: {
      color: 'accent',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'accent',
      },
    },
    light: {
      color: 'grey60',
      mb: 'sm',
      fontWeight: 'light',
      [`& .${cssClass('Icon')} svg`]: {
        fill: 'grey60',
      },
    },
    default: {},
  },
})

/**
 * Prop Types of a Label component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * {@link SpaceProps} and {@link TypographyProps}
 *
 * @memberof Label
 * @alias LabelProps
 * @property {string} [...] All props default to _label_ html component like `htmlFor`,
 *                          `id` etc.
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export type LabelProps = ColorProps & SpaceProps & TypographyProps & {
  /** If label represents required field - appends star (*) */
  required?: boolean;
  /** If label should be in uppercase version */
  uppercase?: boolean;
  /** By default labels are displayed as a block. You can override this by setting `inline` */
  inline?: boolean;
  /** If label represents disabled field (dimmed version) */
  disabled?: boolean;
  /** Color variant */
  variant?: LabelVariantType;
  /** Label size */
  size?: 'default' | 'lg'
}

const setDisabled = ({ disabled, theme }): ReturnType<ThemedCssFunction<DefaultTheme>> => (
  disabled
    ? css`
    color: ${theme.colors.grey40};
    & .${cssClass('Icon')} svg {
      fill: ${theme.colors.grey40};
    }
  `
    : css``
)

/**
 * @classdesc
 *
 * <img src="components/label.png" />
 *
 * Styled form of **label** element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Label, LabelProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LabelProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-label--default Storybook}
 * @hideconstructor
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 * @section design-system
 */
const Label = styled.label<LabelProps>`
  display: ${({ inline }): string => (inline ? 'inline-block' : 'block')};
  font-family: ${themeGet('font')};
  font-size: ${(props): string => themeGet('fontSizes', props.size === 'lg' ? 'md' : 'sm')(props)};
  line-height: ${themeGet('lineHeights', 'default')};
  margin-bottom: ${({ theme, inline }): string => (inline ? '0' : theme.space.default)};

  &:before {
    content: "${({ required }): string => (required ? '*' : '')}";
    color: ${themeGet('colors', 'primary100')};
    margin-right: ${themeGet('space', 'sm')};
    display: ${({ required }): string => (required ? 'block-inline' : 'none')};
  }

  & > .${cssClass('Icon')}:first-child {
    margin-right: ${themeGet('space', 'md')};
  }

  ${({ uppercase }): string => (uppercase ? 'text-transform: uppercase;' : '')}
  ${color};
  ${typography};
  ${space};
  ${labelVariants};
  ${(props) => setDisabled(props as any)};
`

Label.defaultProps = {
  className: cssClass('Label'),
}

export { Label }
export default Label
