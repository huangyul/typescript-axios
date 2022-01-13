import { AxiosRequestConfig } from './types'

/**
 * 默认请求方法
 * @param config 请求配置
 */
export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
