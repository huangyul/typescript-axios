import {isDate, isObject} from './util'

/**
 * 保留 @等关键字符
 * @param val 要编码的值
 * @returns 编码后的值
 */
function encode(val: string): string {
  // 将URI进行编码
  return encodeURIComponent(val)
  .replace(/%40/g, '@')
  .replace(/%3A/gi, ':')
  .replace(/%24/g, '$')
  .replace(/%2C/gi, ',')
  .replace(/%20/g, '+')
  .replace(/%5B/gi, '[')
  .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any) {
  // 如果没有url参数，则直接返回url
  if(!params) {
    return url
  }

  const parts: string[] = []

  // 遍历params对象
  Object.keys(params).forEach((key) => {
    let val = params[key]
    // 如果value为null或undefined，也不处理，跳过
    if(val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    // 如果是数组，要在key加入[]
    if(Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    // 处理是Date和Object对象时的特殊情况
    values.forEach(val => {
      if(isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  // 参数之间&链接
  let serializedParams = parts.join('&')

  // 切除#后面的
  if(serializedParams) {
    const markIndex = url.indexOf('#')
    if(markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === - 1 ? '?' : '&') + serializedParams
  }

  return url
}

