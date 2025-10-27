import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { env } from './env'

// Создаем экземпляр axios с базовой конфигурацией
const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 10000, // 10 секунд
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor для запросов
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Добавляем токен авторизации если он есть
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Логируем запрос в development режиме
    if (env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    }

    return config
  },
  (error: AxiosError) => {
    // eslint-disable-next-line no-console
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  },
)

// Interceptor для ответов
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Логируем успешный ответ в development режиме
    if (env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`✅ API Response: ${response.status} ${response.config.url}`)
    }

    return response
  },
  (error: AxiosError) => {
    // Обрабатываем ошибки
    if (error.response) {
      // Сервер ответил с кодом ошибки
      const { status, data } = error.response

      switch (status) {
      case 401:
        // Неавторизован - очищаем токен и перенаправляем на логин
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token')
          // Можно добавить перенаправление на страницу логина
          // window.location.href = '/login'
        }
        // eslint-disable-next-line no-console
        console.error('🔒 Unauthorized access')
        break
      case 403:
        // eslint-disable-next-line no-console
        console.error('🚫 Forbidden access')
        break
      case 404:
        // eslint-disable-next-line no-console
        console.error('🔍 Resource not found')
        break
      case 500:
        // eslint-disable-next-line no-console
        console.error('💥 Internal server error')
        break
      default:
        // eslint-disable-next-line no-console
        console.error(`❌ API Error: ${status}`, data)
      }
    } else if (error.request) {
      // Запрос был отправлен, но ответа не получено
      // eslint-disable-next-line no-console
      console.error('🌐 Network Error:', error.message)
    } else {
      // Что-то пошло не так при настройке запроса
      // eslint-disable-next-line no-console
      console.error('⚙️ Request Setup Error:', error.message)
    }

    return Promise.reject(error)
  },
)

// Экспортируем настроенный экземпляр axios
export default axiosInstance

// Экспортируем типы для удобства использования
export type { AxiosRequestConfig, AxiosResponse, AxiosError }

// Вспомогательные функции для часто используемых методов
export const api = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config),

  post: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, data, config),

  put: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, data, config),

  patch: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.patch<T>(url, data, config),

  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config),
}