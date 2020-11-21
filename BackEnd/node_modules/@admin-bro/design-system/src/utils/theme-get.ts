import { getValueAndUnit } from 'polished'
import { DefaultTheme } from 'styled-components'

type Kind = keyof DefaultTheme

function themeGet<T extends Kind>(
  kind: T,
  value?: keyof DefaultTheme[T],
  offset?: number | string,
): DefaultTheme[T][any] | DefaultTheme[T] {
  return ({ theme }) => {
    const themeVal = value ? theme[kind][value] : theme[kind]

    if (themeVal && offset) {
      let offsetValue: number
      if (typeof offset === 'string') {
        ([offsetValue] = getValueAndUnit(offset))
      } else {
        offsetValue = offset
      }
      const [pxValue, unit] = getValueAndUnit(themeVal)
      return `${pxValue + offsetValue}${unit}`
    }

    return themeVal
  }
}

export {
  themeGet as default,
  themeGet,
}

/**
 *
 * Handy utility function which simplifies taking values from the {@link Theme}.
 *
 * ### Example
 *
 * ```javascript
 * import { Box, themeGet } from '@admin-bro/design-system'
 *
 * const myComponent = styled(Box)`
 *   padding: ${themeGet('space', 'xl')};
 *   font: ${themeGet('font')};
 *   margin-top: ${themeGet('space', 'xl', -2)};
 *
 *   margin-bottom: ${(props) => themeGet('space', props.disabled ? 'xl' : 'xxl')(props)};
 * `
 *
 * ```
 *
 * @param {string} kind           One of the keys in the {@link Theme} interface. For example:
 *                                `fontWeights`
 * @param {string} [value]        Value for the key
 * @param {string | number} [offset]    optional offset. When you want to take xxl + 2pixels
 *                                you can do this by passing +2 as the offset.
 * @return {ThemeFunction}  function taking props as an argument
 *
 * @new in version 3.3
 * @function themeGet
 * @memberof Theme
 */
