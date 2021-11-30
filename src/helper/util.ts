const toString = Object.prototype.toString

/**
 * 判断是否为Date
 * @param val 
 * @returns {boolean}
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断是否为Object
 * @param val 
 * @returns {boolean}
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlantObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'

}