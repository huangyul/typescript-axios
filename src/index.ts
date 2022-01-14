import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/header'
import { buildUrl } from './helpers/url'
import { AxiosRequestConfig, AxiosResponse } from './types'
import xhr from './xhr'

/**
 * 基础请求方法
 * @param config
 * @returns
 */
function axios(config: AxiosRequestConfig): Promise<AxiosResponse> {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

/**
 * 处理请求配置
 * @param config
 */
function processConfig(config: AxiosRequestConfig) {
  // 处理请求头，判断请求数据是否为对象
  config.headers = transformHeaders(config)
  // 处理url，拼接查询参数
  config.url = transformUrl(config)
  // 处理请求数据，主要是将对象序列化
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
