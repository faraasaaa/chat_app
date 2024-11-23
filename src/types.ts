export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: number;
  type: 'text' | 'image';
  imageUrl?: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  createdAt: number;
}

export type AuthView = 'login' | 'signup';