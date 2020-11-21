type PropertyType = 'date' | 'datetime' | string

/**
 * adds leading 0 to the number when it is lower than 10
 * @param {number} pad        number - i.e 8
 * @returns {sting}           formatted number: i.e. "08"
 * @memberof module:@admin-bro/design-system
 */
const pad = (n: number): string => (n < 10 ? `0${n.toString()}` : n.toString())

/**
 * Formats date to YYYY-MM-DD
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@admin-bro/design-system
 */
const formatDate = (date: Date): string => `${date.getFullYear()}-${pad(date.getMonth() + 1)
}-${pad(date.getDate())}`

/**
 * Formats date to HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@admin-bro/design-system
 */
const formatTime = (date: Date): string => `${pad(date.getHours())}:${pad(date.getMinutes())}`

/**
 * Formats date to YYYY-MM-DD HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@admin-bro/design-system
 */
const formatDateTime = (date: Date): string => `${formatDate(date)} ${formatTime(date)}`

/**
 * Based on the property type formats date to either YYYY-MM-DD HH:mm or YYYY-MM-DD
 *
 * @param   {Date}    date
 * @param   {PropertyType}    propertyType
 * @return  {string}
 * @memberof module:@admin-bro/design-system
 */
const formatDateProperty = (date: Date, propertyType?: PropertyType): string => {
  if (propertyType === 'date') {
    return formatDate(date)
  }
  return formatDateTime(date)
}

export {
  formatDateProperty,
  formatDate,
  formatDateTime,
  pad,
  PropertyType,
}
