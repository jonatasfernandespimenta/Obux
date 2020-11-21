import * as theme from '../theme'
import { Theme, ThemeOverride } from './default-theme.interface'

const isObject = (item: any) => (item && typeof item === 'object' && !Array.isArray(item))

const mergeDeep = (target: any, ...sources: Array<any>) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@admin-bro/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param   {Partial<Theme>}         newTheme
 * @memberof module:@admin-bro/design-system
 *
 * @return  {Theme}
 */
const combineStyles = (newTheme: ThemeOverride): Theme => {
  const merged = mergeDeep(theme, newTheme)
  if (newTheme.font) {
    return {
      ...merged,
      font: newTheme.font,
    }
  }
  return merged
}

// eslint-disable-next-line import/prefer-default-export
export { combineStyles }
