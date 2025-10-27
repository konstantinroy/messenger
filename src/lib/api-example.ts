// Пример использования API сервисов
import { apiServices, type User, type Message } from '@/lib'

// Пример использования в React компоненте или хуке
export const useApiExample = () => {
  // Получение пользователей
  const fetchUsers = async () => {
    try {
      const response = await apiServices.users.getUsers(1, 20)
      console.log('Users:', response.data.data)
      return response.data.data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }

  // Отправка сообщения
  const sendMessage = async (content: string, receiverId: string) => {
    try {
      const response = await apiServices.messages.sendMessage({
        content,
        receiverId,
      })
      console.log('Message sent:', response.data.data)
      return response.data.data
    } catch (error) {
      console.error('Error sending message:', error)
      throw error
    }
  }

  // Получение диалогов
  const fetchDialogs = async () => {
    try {
      const response = await apiServices.dialogs.getDialogs(1, 20)
      console.log('Dialogs:', response.data.data)
      return response.data.data
    } catch (error) {
      console.error('Error fetching dialogs:', error)
      throw error
    }
  }

  return {
    fetchUsers,
    sendMessage,
    fetchDialogs,
  }
}

// Пример прямого использования axios instance
export const directApiExample = async () => {
  try {
    // Прямое использование настроенного axios instance
    const response = await apiServices.users.getUsers()

    // Или использование базового api объекта
    const customResponse = await apiServices.users.getUsers(1, 10)

    return {
      users: response.data.data,
      customUsers: customResponse.data.data,
    }
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
