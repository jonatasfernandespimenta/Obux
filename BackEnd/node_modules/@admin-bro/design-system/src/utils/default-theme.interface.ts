import {
  colors,
  sizes,
  space,
  font,
  fontSizes,
  lineHeights,
  fontWeights,
  borders,
  borderWidths,
  shadows,
} from '../theme'
import { NonNullishPartialRecord } from './non-nullish-partial-record.type'

export interface Theme {
  colors: typeof colors;
  sizes: typeof sizes;
  borders: typeof borders;
  space: typeof space;
  fontSizes: typeof fontSizes;
  lineHeights: typeof lineHeights;
  fontWeights: typeof fontWeights;
  font: typeof font;
  shadows: typeof shadows;
  borderWidths: typeof borderWidths;
}

export type ThemeOverride<T=Theme> = {
  [key in keyof T]?: NonNullishPartialRecord<T[key]>
}
