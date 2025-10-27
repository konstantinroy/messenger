# Messenger App with PostgreSQL and Prisma

Этот проект представляет собой мессенджер с использованием Next.js, PostgreSQL и Prisma.

## Настройка и запуск

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка базы данных

Создайте файл `.env` в корне проекта и скопируйте содержимое из `env.example`:

```bash
cp env.example .env
```

Отредактируйте `.env` файл с вашими настройками базы данных.

### 3. Запуск PostgreSQL в Docker

```bash
docker-compose up -d
```

Docker Compose автоматически использует переменные из `.env` файла для настройки PostgreSQL.

### 4. Настройка Prisma

```bash
# Генерация Prisma клиента
npm run db:generate

# Применение схемы к базе данных
npm run db:push
```

### 5. Запуск приложения

```bash
npm run dev
```

## API Endpoints

### Health Check
- `GET /api/health` - проверка состояния API и базы данных

### Пользователи
- `GET /api/users` - получить всех пользователей
- `POST /api/users` - создать нового пользователя
- `GET /api/users/[id]` - получить пользователя по ID
- `PUT /api/users/[id]` - обновить пользователя
- `DELETE /api/users/[id]` - удалить пользователя

### Диалоги
- `GET /api/dialogs` - получить все диалоги
- `POST /api/dialogs` - создать новый диалог

### Сообщения
- `GET /api/messages?dialogId=[id]&limit=50&offset=0` - получить сообщения диалога
- `POST /api/messages` - создать новое сообщение

## Полезные команды

```bash
# Открыть Prisma Studio для просмотра данных
npm run db:studio

# Создать миграцию
npm run db:migrate

# Применить изменения схемы без миграции
npm run db:push
```

## Переменные окружения

### Обязательные переменные:
- `DATABASE_URL` - строка подключения к PostgreSQL
- `NEXTAUTH_SECRET` - секретный ключ для NextAuth
- `JWT_SECRET` - секретный ключ для JWT токенов

### Настройки базы данных:
- `DB_HOST` - хост базы данных (по умолчанию: localhost)
- `DB_PORT` - порт базы данных (по умолчанию: 5432)
- `DB_NAME` - имя базы данных
- `DB_USER` - пользователь базы данных
- `DB_PASSWORD` - пароль базы данных
- `DB_CONTAINER_NAME` - имя Docker контейнера

### Настройки приложения:
- `DEFAULT_PAGE_SIZE` - размер страницы по умолчанию (по умолчанию: 20)
- `MAX_PAGE_SIZE` - максимальный размер страницы (по умолчанию: 100)
- `MAX_FILE_SIZE` - максимальный размер файла в байтах (по умолчанию: 10MB)

## Структура базы данных

- **User** - пользователи системы
- **Dialog** - диалоги (приватные и групповые)
- **Message** - сообщения в диалогах

## Тестирование API

После запуска приложения вы можете протестировать API endpoints:

1. Проверьте состояние: `http://localhost:3000/api/health`
2. Создайте пользователя: `POST http://localhost:3000/api/users`
3. Получите всех пользователей: `GET http://localhost:3000/api/users`
