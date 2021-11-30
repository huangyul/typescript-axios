import { AxiosRequestConfig } from './types'
import {buildURL} from './helper/url'

import xhr from './xhr'
import { transfromRequest } from './helper/data'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 处理url参数
 * @param config 
 */
function transfromUrl(config: AxiosRequestConfig): string {
  const {url, params} = config
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

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromUrl(config)
  config.data = transformRequestData(config)
}

export default axios
