// eslint-disable-next-line import/prefer-default-export

/**
 *
 * Generates class name for given component. It is used by AdminBro core to append namespaced
 * classes.
 *
 * ### example
 *
 * ```javascript
 * import { cssClass } from '@admin-bro/design-system'
 *
 * cssClass('Icon', 'my-regular-class-name')
 * // returns: 'admin-bro_Icon my-regular-class-name'
 * ```
 *
 *
 * @param {string | Array<string>} className
 * @param {string}                [regularClass]
 * @memberof module:@admin-bro/design-system
 */
const cssClass = (className: string | Array<string>, regularClass?: string): string => {
  let names: Array<string> = []
  if ((className as any).join) {
    names = className as Array<string>
  } else {
    names = [className as string]
  }
  const parsed = names.map((name) => `admin-bro_${name}`)
  if (regularClass) {
    parsed.push(regularClass)
  }

  return parsed.join(' ')
}

export {
  cssClass as default,
  cssClass,
}
