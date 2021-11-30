import { isPlantObject } from "./util"


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

export function processHeaders(headers: any, data: any):any {
  normalizeHeaders(headers, 'Content-Type')

  if(isPlantObject(data)) {
    if(headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=uft-8'
    }
  }

  return headers
}