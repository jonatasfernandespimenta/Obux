import { grid, ResponsiveValue } from 'styled-system'
import styled from 'styled-components'

import Box from '../../atoms/box/box'
import { themeGet } from '../../utils'

export type GridRowProps = {
  column: number | string | ResponsiveValue<number>,
}

// const column = style({
//   prop: 'column',
//   cssProperty: 'grid-column',
//   transformValue: (n) => `span ${n}`,
// })

const GridRow = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${themeGet('space', 'xl')};
  grid-auto-flow: column;
  margin-bottom: ${themeGet('space', 'xl')};

  &:last-child {
    margin-bottom: 0;
  }

  ${grid};
`

export {
  GridRow as default,
  GridRow,
}
