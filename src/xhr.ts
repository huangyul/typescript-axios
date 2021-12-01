
import { parseHeaders } from './helper/headers'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'


export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve) => {
    // 从配置中获取参数
    const {data = null, url, method = 'get', headers, responseType} = config

    const request = new XMLHttpRequest()

    if(responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      // 不等于4，说明请求未完毕
      if(request.readyState !== 4) {
        return
      }
      // getAllResponseHeaders()返回所有的响应头
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      // 获取相应的数据
      const responseData = responseType && responseType !== 'text' ? request.response: request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      // 放入promise返回
      resolve(response)
    }
    
    Object.keys(headers).forEach(name => {
      if(data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)
  })
}
