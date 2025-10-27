# API Configuration

Этот модуль содержит настроенный экземпляр axios с глобальными конфигурациями и переиспользуемыми API сервисами.

## Структура

```
src/lib/
├── axios.ts          # Основной конфиг axios с interceptors
├── api-types.ts      # TypeScript типы для API
├── api-services.ts   # Переиспользуемые API сервисы
├── api-example.ts    # Примеры использования
├── index.ts          # Экспорт всех модулей
└── env.ts            # Конфигурация окружения
```

## Основные возможности

### 1. Глобальная конфигурация axios

- **Базовый URL**: Автоматически берется из переменной окружения `API_BASE_URL`
- **Таймаут**: 10 секунд по умолчанию
- **Заголовки**: Автоматически добавляется `Content-Type: application/json`
- **Авторизация**: Автоматически добавляется Bearer токен из localStorage

### 2. Interceptors

#### Request Interceptor
- Автоматически добавляет токен авторизации из localStorage
- Логирует запросы в development режиме

#### Response Interceptor
- Обрабатывает ошибки HTTP статусов (401, 403, 404, 500)
- Автоматически очищает токен при 401 ошибке
- Логирует ответы в development режиме

### 3. API Сервисы

Предоставляются готовые сервисы для работы с:
- **Пользователи** (`userApi`)
- **Сообщения** (`messageApi`) 
- **Диалоги** (`dialogApi`)
- **Звонки** (`callApi`)

## Использование

### Базовое использование

```typescript
import { apiServices } from '@/lib';

// Получение пользователей
const users = await apiServices.users.getUsers(1, 20);

// Отправка сообщения
const message = await apiServices.messages.sendMessage({
  content: 'Привет!',
  receiverId: 'user-id'
});
```

### Прямое использование axios

```typescript
import { axiosInstance, api } from '@/lib';

// Использование настроенного экземпляра
const response = await axiosInstance.get('/api/users');

// Использование упрощенного API
const users = await api.get('/api/users');
```

### Типизированные запросы

```typescript
import { apiServices, type User, type Message } from '@/lib';

const getUser = async (id: string): Promise<User> => {
  const response = await apiServices.users.getUserById(id);
  return response.data.data;
};
```

## Переменные окружения

Убедитесь, что в вашем `.env` файле установлены:

```env
API_BASE_URL=http://localhost:3000
NODE_ENV=development
```

## Обработка ошибок

Все API запросы автоматически обрабатывают ошибки:

- **401**: Автоматически очищает токен и может перенаправить на логин
- **403**: Логирует ошибку доступа
- **404**: Логирует ошибку "ресурс не найден"
- **500**: Логирует внутреннюю ошибку сервера
- **Network errors**: Обрабатывает сетевые ошибки

## Логирование

В development режиме автоматически логируются:
- Все исходящие запросы с методом и URL
- Все входящие ответы со статусом
- Ошибки запросов и ответов
