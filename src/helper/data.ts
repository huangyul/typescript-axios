/* 处理body的 */

import { isPlantObject } from "./util";

/**
 * 将post的data序列化
 * @param data 
 * @returns 
 */
export function transfromRequest(data: any): any {
  if(isPlantObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if(typeof data === 'string') {
    data = JSON.parse(data)
  }
  return data
}
