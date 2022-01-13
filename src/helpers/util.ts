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
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

/**
 * 判断是否为真的对象
 * @param val
 * @returns
 */
export function isPlainObject(val: any): val is Object {
  return Object.prototype.toString.call(val) === '[object Object]'
}
