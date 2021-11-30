/* 处理body的 */

import { isPlantObject } from "./util";

export function transfromRequest(data: any): any {
  if(isPlantObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
