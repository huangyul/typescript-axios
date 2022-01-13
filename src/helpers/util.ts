/**
 * 判断是否为Date类型
 * @param val
 * @returns
 */
export function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}

/**
 * 判断是否为Object类型
 * @param val
 * @returns
 */
export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object'
}
