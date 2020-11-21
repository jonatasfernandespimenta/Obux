import { grid, GridProps } from 'styled-system'
import styled from 'styled-components'

import Box from '../../atoms/box/box'

export type GridColumnProps = {

} & GridProps

const GridColumn = styled(Box)<GridColumnProps>`
  ${grid};
`

export {
  GridColumn as default,
  GridColumn,
}
