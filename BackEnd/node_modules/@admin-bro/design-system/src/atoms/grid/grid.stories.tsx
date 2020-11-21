import React from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs'

import { GridRow, GridColumn } from './index'
import StoryWrapper from '../../utils/story-wrapper'

// export default {
//   title: 'DesignSystem/Atoms/Grid',
//   decorators: [withKnobs],
//   argTypes: {
//     onClick: { action: 'clicked' },
//   },
// }
// export const Default: React.FC = () => (
//   <StoryWrapper label="GridContainer default settings">
//     <GridRow>
//       <GridColumn bg="primary20" p="xl" gridColumn="5">col3</GridColumn>
//       <GridColumn bg="primary20" p="xl">col2</GridColumn>
//       <GridColumn bg="primary20" p="xl">col3</GridColumn>
//     </GridRow>
//     <GridRow>
//       <GridColumn bg="primary20" p="xl">col1</GridColumn>
//       <GridColumn bg="primary20" p="xl">col2</GridColumn>
//       <GridColumn bg="primary20" p="xl">col3</GridColumn>
//     </GridRow>
//   </StoryWrapper>
// )
