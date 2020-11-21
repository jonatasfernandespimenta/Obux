import styled from 'styled-components'
import { space, variant } from 'styled-system'

import Box, { BoxProps } from '../../atoms/box/box'
import { VariantType } from '../../theme'
import { cssClass, themeGet } from '../../utils'
import DropDownMenu from './drop-down-menu'

const variantsShared = (color) => ({
  color,
  [`& .${cssClass('DropDownItemAction')}`]: {
    color,
  },
  '&:hover': {
    borderColor: color,
  },
  [`& .${cssClass('Icon')} svg`]: {
    fill: color,
  },
})

const colorVariants = variant<any, VariantType>({
  prop: 'colorVariant',
  variants: {
    primary: variantsShared('primary100'),
    danger: variantsShared('error'),
    success: variantsShared('success'),
    info: variantsShared('info'),
    secondary: { bg: 'accent' },
    light: variantsShared('grey80'),
    default: {},
  },
})

/**
 * Props passed to DropDownItem
 * Extends {@link BoxProps}
 *
 * @memberof DropDown
 * @extends BoxProps
 */
export type DropDownItemProps = BoxProps & {
  colorVariant?: VariantType
}

/**
 * @component
 * @private
 */
export const DropDownItem = styled(Box)<DropDownItemProps>`
  position: relative;
  z-index: 10000;
  border: none;
  color: ${themeGet('colors', 'grey80')};
  font-family: ${themeGet('font')};
  border: solid transparent;
  border-width: 0 ${themeGet('space', 'sm')};
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;

  &:hover {
    border-color: ${themeGet('colors', 'primary100')};
    background: ${themeGet('colors', 'grey20')};
  }

  & .${cssClass('Icon')} {
    padding-right: ${themeGet('space', 'default')};
    fill: ${themeGet('colors', 'grey40')};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${DropDownMenu} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${DropDownMenu} {
    display: flex;
  }

  & a {
    color: ${themeGet('colors', 'grey80')};
    text-decoration: none;
  }
  padding: ${themeGet('space', 'lg')} ${themeGet('space', 'xxl')};

  ${space};
  ${colorVariants};
`

export default DropDownItem
