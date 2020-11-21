import styled from 'styled-components'
import {
  space, SpaceProps, color, layout,
  LayoutProps, flexbox, FlexboxProps, border, BorderProps,
  position, PositionProps, variant,
  shadow, ShadowProps,
} from 'styled-system'
import { ColorProps } from '../../utils/color-props'
import { cssClass } from '../../utils/css-class'

const variants = variant({
  variants: {
    grey: {
      flexGrow: 1,
      bg: 'bg',
      py: 'xl',
      px: ['0', 'xl'],
      className: cssClass(['Box', 'Box_Grey']),
    },
    white: {
      px: ['default', 'xxl'],
      py: 'xxl',
      bg: 'white',
      className: cssClass(['Box', 'Box_White']),
    },
    card: {
      p: 'xxl',
      bg: 'white',
      className: cssClass(['Box', 'Box_Card']),
      boxShadow: 'card',
    },
  },
})

type FlexboxFlexProp = boolean | FlexboxProps['flex']

/**
 * @load ./box-props.doc.md
 * @memberof Box
 * @alias BoxProps
 * @property {string} [...] Other props from {@link SpaceProps}, {@link ColorProps},
 *                          {@link LayoutProps}, {@link FlexboxProps},
 *                          {@link PositionProps} and {@link BorderProps}.
 */
export type BoxProps = SpaceProps & ColorProps & LayoutProps &
  Omit<FlexboxProps, 'flex'> & BorderProps & PositionProps & ShadowProps & {
    /** If box should be rendered as flex. You can pass boolean or FlexboxProps['flex'] */
    flex?: FlexboxFlexProp;
    /** Box variants */
    variant?: 'grey' | 'white' | 'card';
    /** If set to true it makes css changes as 500ms transitions */
    animate?: boolean;
    /** Optional class name passed down to the wrapper */
    className?: string;
  }

/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */
const Box = styled.section<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${({ flex }): string => (flex && typeof flex === 'boolean' ? 'display: flex;' : '')}
  font-family: ${({ theme }): string => theme.font};
  line-height: ${({ theme }): string => theme.lineHeights.default};
  font-size: ${({ theme }): string => theme.fontSizes.default};
  font-weight: normal;
  ${({ animate }): string => (animate ? 'transition: all 500ms;' : '')};

  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${shadow};
  ${position};
  ${variants};
`

Box.defaultProps = {
  className: cssClass('Box'),
}

export { Box }
export default Box
