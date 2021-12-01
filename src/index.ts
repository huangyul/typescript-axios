import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import { buildURL } from './helper/url'

import xhr from './xhr'
import { transformResponse, transfromRequest } from './helper/data'
import { processHeaders } from './helper/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

/**
 * 处理url参数
 * @param config
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * 处理post请求里的body
 * @param config
 * @returns
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transfromRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
  config.headers = transformHeaders(config)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
