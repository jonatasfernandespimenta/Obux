import React from 'react'
import { ThemeProps, DefaultTheme, withTheme } from 'styled-components'
import * as Illustrations from './illustrations/index'

/**
 * @memberof Illustration
 * @alias IllustrationProps
 */
export type IllustrationProps = {
  /**
   * Available illustration variant
   */
  variant: 'Moon' | 'Rocket' | 'Astronaut'
    | 'DocumentCheck' | 'DocumentSearch' | 'FileSearch'
    | 'FlagInCog' | 'Folders' | 'Launch' | 'Planet'
    | 'AdminBroLogo' | 'SoftwareBrothersLogo' | 'GithubLogo'
    | 'SlackLogo';
  /** Optional max width restrictions */
  width?: number;
  /** Optional max height restrictions */
  height?: number;
}

type RawIllustrationType = IllustrationProps & ThemeProps<DefaultTheme> & {
  // this fixes unknown error with some TSC version (monkey patch)
  children?: React.ReactNode
}

const RawIllustration: React.FC<RawIllustrationType> = (props) => {
  const { variant, ...other } = props
  const IllustrationComponent = Illustrations[variant]
  return (
    <IllustrationComponent {...other} />
  )
}

/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminBro.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
 *
 * ### Usage
 *
 * ```javascript
 * import { Illustration, IllustrationProps } from '@admin-bro/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IllustrationProps
 * @see {@link https://storybook.adminbro.com/?path=/story/designsystem-atoms-illustration--default Storybook}
 * @hideconstructor
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 * @section design-system
 */
const Illustration = withTheme(RawIllustration)

export { Illustration }
export default Illustration
