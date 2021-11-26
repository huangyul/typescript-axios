import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  // 从配置参数中获取需要的变量
  const { data = null, url, method = 'get' } = config

  // 实例化一个XMLHttp对象
  const request = new XMLHttpRequest()

  // 调用open方法
  request.open(method.toUpperCase(), url, true)

  // 使用send方法发送请求
  request.send(data)
}
