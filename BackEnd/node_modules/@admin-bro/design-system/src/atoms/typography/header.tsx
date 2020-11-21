import React from 'react'
import styled from 'styled-components'
import { typography, TypographyProps, space, SpaceProps } from 'styled-system'
import { Button } from '../button'
import { Badge } from '../badge/badge'
import { cssClass } from '../../utils/css-class'
import themeGet from '../../utils/theme-get'

/**
 * Prop Types of an Header components.
 * Apart from all props for a standard hx elements it extends
 * {@link TypographyProps} and {@link SpaceProps}
 *
 * @memberof Header
 * @alias HeaderProps
 * @property {string} [...] Other props from {@link TypographyProps}, {@link SpaceProps}
 */
export type HeaderProps = TypographyProps & SpaceProps

const Base = styled.h3<HeaderProps>`
  font-family: ${themeGet('font')};
  vertical-align: middle;
  padding: 0;
  * {
    vertical-align: middle;
  }
  & ${Button}, a {
    vertical-align: bottom;
  }
  * > &:first-child {
    margin-top: ${themeGet('space', 'sm')};
  }
  ${Badge} {
    vertical-align: middle;
  }

  ${typography};
  ${space};
`

Base.defaultProps = {
  fontWeight: 'light',
  fontSize: 'h3',
  lineHeight: 'xl',
  className: cssClass(['Header', 'H3']),
  marginTop: 'xxl',
  marginBottom: 'xl',
}

const H1 = styled((props) => <Base as="h1" {...props} />)``
H1.defaultProps = {
  fontSize: 'h1',
  lineHeight: 'xxl',
  className: cssClass(['Header', 'H1']),
  marginTop: 'x4',
  marginBottom: 'x3',
}

const H2 = styled((props) => <Base as="h2" {...props} />)`
  & ${Button}, a {
    margin-bottom: 4px;
  }
`

H2.defaultProps = {
  fontSize: 'h2',
  lineHeight: 'xxl',
  className: cssClass(['Header', 'H2']),
  marginTop: 'x3',
  marginBottom: 'xxl',
}

const H3 = Base

const H4 = styled((props) => <Base as="h4" {...props} />)``
H4.defaultProps = {
  fontSize: 'h4',
  lineHeight: 'xl',
  className: cssClass(['Header', 'H4']),
  marginTop: 'xxl',
  marginBottom: 'xl',
}

const H5 = styled((props) => <Base as="h5" {...props} />)``
H5.defaultProps = {
  fontSize: 'xl',
  lineHeight: 'lg',
  className: cssClass(['Header', 'H5']),
  marginTop: 'xl',
  marginBottom: 'default',
  fontWeight: 'normal',
}

const H6 = styled((props) => <Base as="h6" {...props} />)``
H6.defaultProps = {
  fontSize: 'lg',
  lineHeight: 'lg',
  className: cssClass(['Header', 'H6']),
  marginTop: 'lg',
  marginBottom: 'default',
  fontWeight: 'normal',
}

/**
 * @load ./header.doc.md
 * @component
 * @subcategory Atoms
 * @see HeaderProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-header--default Storybook}
 * @hideconstructor
 * @section design-system
 */
const Header = H3 as any

Header.H1 = H1
Header.H2 = H2
Header.H3 = H3
Header.H4 = H4
Header.H5 = H5
Header.H6 = H6

export {
  Header as default,
  Header,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
