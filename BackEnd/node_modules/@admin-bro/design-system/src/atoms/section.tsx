/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { Box } from './box/box'
import { cssClass } from '../utils/css-class'
import { themeGet } from '../utils'

/**
 * @classdesc
 *
 * <img src="components/section.png" />
 *
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * ### Usage
 *
 * ```javascript
 * import { Section } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-section--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 * @section design-system
 */
const Section = styled(Box)`
  border: 1px dotted ${themeGet('colors', 'primary20')};
  padding: ${themeGet('space', 'xl')};
  border-left: ${themeGet('space', 'md')} solid ${themeGet('colors', 'primary20')};
  padding-left: ${themeGet('space', 'xl')};
`

Section.defaultProps = {
  className: cssClass('Section'),
}

export { Section }

export default Section
