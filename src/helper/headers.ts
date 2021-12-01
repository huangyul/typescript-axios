import { isPlantObject } from "./util"

/**
 * 规范化header的字段，例如Content-Type
 * @param headers 
 * @param normalizeName 
 * @returns 
 */
function normalizeHeaders(headers: any, normalizeName: string): void {
  if(!headers) {
    return
  }

  Object.keys(headers).forEach(name => {
    if(name !== normalizeName && name.toUpperCase() === normalizeName) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

/**
 * 处理header，如果传入的data为对象，自动加入application/json
 * @param headers 
 * @param data 
 * @returns 
 */
export function processHeaders(headers: any, data: any):any {
  normalizeHeaders(headers, 'Content-Type')

  if(isPlantObject(data)) {
    if(headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=uft-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if(!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if(!key) {
      return
    }
    if(val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed
}