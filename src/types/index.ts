export type AxiosRequestConfig = {
  url: string // 请求地址
  method?: Method // 请求方法
  data?: any // 请求数据
  params?: any // url参数
}

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
