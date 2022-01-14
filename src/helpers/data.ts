import { isPlainObject } from './util'

/**
 * 处理请求的data，如果是对象要转为字符串
 * @param data
 * @returns
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}

/**
 * 处理响应数据，要将data转为对象
 * @param data
 * @returns
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
