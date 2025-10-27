import { api } from './axios'
import type {
  ApiResponse,
  PaginatedResponse,
  User,
  Message,
  Dialog,
  Call,
} from './api-types'

// API сервисы для работы с пользователями
export const userApi = {
  // Получить всех пользователей
  getUsers: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<User>>(`/api/users?page=${page}&limit=${limit}`),

  // Получить пользователя по ID
  getUserById: (id: string) =>
    api.get<ApiResponse<User>>(`/api/users/${id}`),

  // Создать нового пользователя
  createUser: (userData: Partial<User>) =>
    api.post<ApiResponse<User>>('/api/users', userData),

  // Обновить пользователя
  updateUser: (id: string, userData: Partial<User>) =>
    api.put<ApiResponse<User>>(`/api/users/${id}`, userData),

  // Удалить пользователя
  deleteUser: (id: string) =>
    api.delete<ApiResponse<void>>(`/api/users/${id}`),
}

// API сервисы для работы с сообщениями
export const messageApi = {
  // Получить сообщения диалога
  getMessages: (dialogId: string, page = 1, limit = 50) =>
    api.get<PaginatedResponse<Message>>(`/api/messages?dialogId=${dialogId}&page=${page}&limit=${limit}`),

  // Отправить сообщение
  sendMessage: (messageData: { content: string; receiverId?: string; dialogId?: string }) =>
    api.post<ApiResponse<Message>>('/api/messages', messageData),

  // Обновить сообщение
  updateMessage: (id: string, content: string) =>
    api.put<ApiResponse<Message>>(`/api/messages/${id}`, { content }),

  // Удалить сообщение
  deleteMessage: (id: string) =>
    api.delete<ApiResponse<void>>(`/api/messages/${id}`),
}

// API сервисы для работы с диалогами
export const dialogApi = {
  // Получить все диалоги пользователя
  getDialogs: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<Dialog>>(`/api/dialogs?page=${page}&limit=${limit}`),

  // Создать новый диалог
  createDialog: (dialogData: { name?: string; type: 'private' | 'group'; participantIds: string[] }) =>
    api.post<ApiResponse<Dialog>>('/api/dialogs', dialogData),

  // Получить диалог по ID
  getDialogById: (id: string) =>
    api.get<ApiResponse<Dialog>>(`/api/dialogs/${id}`),

  // Обновить диалог
  updateDialog: (id: string, dialogData: Partial<Dialog>) =>
    api.put<ApiResponse<Dialog>>(`/api/dialogs/${id}`, dialogData),

  // Удалить диалог
  deleteDialog: (id: string) =>
    api.delete<ApiResponse<void>>(`/api/dialogs/${id}`),
}

// API сервисы для работы со звонками
export const callApi = {
  // Получить историю звонков
  getCalls: (page = 1, limit = 20) =>
    api.get<PaginatedResponse<Call>>(`/api/calls?page=${page}&limit=${limit}`),

  // Инициировать звонок
  initiateCall: (receiverId: string) =>
    api.post<ApiResponse<Call>>('/api/calls', { receiverId }),

  // Принять звонок
  acceptCall: (callId: string) =>
    api.patch<ApiResponse<Call>>(`/api/calls/${callId}/accept`),

  // Отклонить звонок
  rejectCall: (callId: string) =>
    api.patch<ApiResponse<Call>>(`/api/calls/${callId}/reject`),

  // Завершить звонок
  endCall: (callId: string) =>
    api.patch<ApiResponse<Call>>(`/api/calls/${callId}/end`),
}

// Объединяем все API сервисы
export const apiServices = {
  users: userApi,
  messages: messageApi,
  dialogs: dialogApi,
  calls: callApi,
}
