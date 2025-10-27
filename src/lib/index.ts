// Экспортируем все API утилиты из одного места
export { default as axiosInstance, api } from './axios'
export type { AxiosRequestConfig, AxiosResponse, AxiosError } from './axios'

export type {
  ApiResponse,
  ApiError,
  PaginatedResponse,
  User,
  Message,
  Dialog,
  Call,
} from './api-types'

export {
  userApi,
  messageApi,
  dialogApi,
  callApi,
  apiServices,
} from './api-services'

// Экспортируем конфигурацию окружения
export { env } from './env'
