// 请求参数配置
export type AxiosRequestConfig = {
  url: string // 请求地址
  method?: Method // 请求方法
  headers?: any // 请求头
  data?: any // 请求数据
  params?: any // url参数
  responseType?: XMLHttpRequestResponseType
}

// 响应参数
export type AxiosResponse = {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

/**
 * resolve函数中的参数就是一个AxiosResponse类型
 */
export interface AxiosPromise extends Promise<AxiosResponse> {}

// 规范方法的参数
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
