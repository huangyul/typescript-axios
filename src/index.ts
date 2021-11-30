import { AxiosRequestConfig } from './types'
import {buildURL} from './helper/url'

import xhr from './xhr'

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

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromUrl(config)
}

export default axios
