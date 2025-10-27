// Общие типы для API ответов
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Типы для пользователей
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

// Типы для сообщений
export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId?: string;
  dialogId?: string;
  createdAt: string;
  updatedAt: string;
  sender?: User;
}

// Типы для диалогов
export interface Dialog {
  id: string;
  name?: string;
  type: 'private' | 'group';
  participants: User[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
}

// Типы для звонков
export interface Call {
  id: string;
  callerId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'rejected' | 'ended';
  duration?: number;
  createdAt: string;
  caller?: User;
  receiver?: User;
}
