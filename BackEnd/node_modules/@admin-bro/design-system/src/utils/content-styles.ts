import { css } from 'styled-components'
import themeGet from './theme-get'

/**
 *
 * Gives you the default styles for all "content" elements like:
 * ul, li, h1-h5 etc.
 *
 * ### Example
 *
 * ```typescript
 * import styled from 'styled-components'
 * import { contentCSS } from '@admin-bro/design-system'
 *
 * const myComponent = styled`
 *   ${contentCSS};
 * `
 * ```
 *
 * @memberof module:@admin-bro/design-system
 */
const contentCSS = css`
  font-family: ${({ theme }): string => theme.font};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
  font-weight: ${themeGet('fontWeights', 'light')};
  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    &:not([class*="admin-bro_"]) {
      margin: 0;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
  }

  p, div {
    margin-bottom: ${themeGet('space', 'xl')};
    font-size: ${themeGet('fontSizes', 'md')};
    font-weight: ${themeGet('fontWeights', 'light')};
  }

  strong, b {
    font-weight: ${themeGet('fontWeights', 'bolder')}
  }

  li + li {
    margin-top: ${themeGet('space', 'md')};
  }

  p:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  ul:not(:last-child),
  blockquote:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child) {
    margin-bottom: ${themeGet('space', 'xl')};
  }

  pre {
    background-color: ${themeGet('colors', 'grey20')};
    border: 1px solid ${themeGet('colors', 'grey40')};
    padding: ${themeGet('space', 'xl')};
    margin: ${themeGet('space', 'xl')} 0 ${themeGet('space', 'xxl')};
    white-space: pre;
    font-family: 'Courier New', Courier, monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${themeGet('fontWeights', 'light')};
    line-height: ${themeGet('lineHeights', 'xl')};
    font-size: ${themeGet('fontSizes', 'h3')};
    margin-top: ${themeGet('space', 'xxl')};
    margin-bottom: ${themeGet('space', 'xl')};
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: ${themeGet('space', 'sm')};
  }

  h1 {
    font-size: ${themeGet('fontSizes', 'h1')};
    line-height: ${themeGet('lineHeights', 'xxl')};
    margin-top: ${themeGet('space', 'x4')};
    margin-bottom: ${themeGet('space', 'x3')};
  }

  h2 {
    font-size: ${themeGet('fontSizes', 'h2')};
    line-height: ${themeGet('lineHeights', 'xxl')};
    margin-top: ${themeGet('space', 'x3')};
    margin-bottom: ${themeGet('space', 'xxl')};
  }

  h3 {
    
  }

  h4 {
    font-size: ${themeGet('fontSizes', 'h4')};
    line-height: ${themeGet('lineHeights', 'xl')};
    margin-top: ${themeGet('space', 'xxl')};
    margin-bottom: ${themeGet('space', 'xl')};
  }

  h5 {
    font-size: ${themeGet('fontSizes', 'xl')};
    line-height: ${themeGet('lineHeights', 'lg')};
    margin-top: ${themeGet('space', 'xl')};
    margin-bottom: ${themeGet('space', 'lg')};
    font-weight: ${themeGet('fontWeights', 'normal')};
  }

  h6 {
    font-size: ${themeGet('fontSizes', 'lg')};
    line-height: ${themeGet('lineHeights', 'lg')};
    margin-top: ${themeGet('space', 'lg')};
    margin-bottom: ${themeGet('space', 'default')};
    font-weight: ${themeGet('fontWeights', 'normal')};
  }

  blockquote {
    background-color: ${themeGet('colors', 'grey20')};
    border-left: ${themeGet('space', 'sm')} solid ${themeGet('colors', 'primary20')};
    padding: ${themeGet('space', 'xl')};
    margin: ${themeGet('space', 'xxl')} 0;
  }

  ol {
    list-style-position: outside;
    margin-top: ${themeGet('space', 'lg')};
    margin-left: ${themeGet('space', 'xl')};
  }
  ol:not([type]) {
    list-style-type: decimal;
  }
  ol:not([type]).is-lower-alpha {
    list-style-type: lower-alpha;
  }
  ol:not([type]).is-lower-roman {
    list-style-type: lower-roman;
  }
  ol:not([type]).is-upper-alpha {
    list-style-type: upper-alpha;
  }
  ol:not([type]).is-upper-roman {
    list-style-type: upper-roman;
  }

  ul {
    list-style: disc outside;
    margin-left: ${themeGet('space', 'xl')};
    margin-top: ${themeGet('space', 'lg')};
  }
  ul ul {
    list-style-type: circle;
    margin-top: ${themeGet('space', 'sm')};
  }
  ul ul ul {
    list-style-type: square;
  }

  em {
    font-style: italic;
  }

  dd {
    margin-left: ${themeGet('space', 'xl')};
  }

  figure {
    margin-left: ${themeGet('space', 'md')};
    margin-right: ${themeGet('space', 'md')};
    text-align: center;
  }
  figure:not(:first-child) {
    margin-top: ${themeGet('space', 'md')};
  }
  figure:not(:last-child) {
    margin-bottom: ${themeGet('space', 'md')};
  }
  figure img {
    display: inline-block;
  }
  figure figcaption {
    font-style: italic;
  }

  sup,
  sub {
    font-size: 75%;
  }

  table {
    width: 100%;
    margin: ${themeGet('space', 'xl')} 0;
  }
  table td,
  table th {
    padding: ${themeGet('space', 'lg')};
    vertical-align: top;
  }
  table th {
    color: ${themeGet('colors', 'grey60')};
    border-bottom: 1px solid ${themeGet('colors', 'grey40')};
  }

  table td {
    border-bottom: 1px solid ${themeGet('colors', 'grey20')};
  }
  table th:not([align]) {
    text-align: inherit;
  }
  table thead td,
  table thead th {
    border-bottom: 1px solid ${themeGet('colors', 'grey40')};
    color: ${themeGet('colors', 'grey60')};
  }
  table tfoot td,
  table tfoot th {
    border-bottom: 1px solid ${themeGet('colors', 'grey40')};
    color: ${themeGet('colors', 'grey60')};
  }
  table tbody tr:last-child td,
  table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .tabs li + li {
    margin-top: 0;
  }
`

export default contentCSS
