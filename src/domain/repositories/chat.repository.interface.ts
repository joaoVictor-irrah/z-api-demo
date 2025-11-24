import { Chat } from '../entities/chat.entity';

export interface IChatRepository {
  findAll(): Promise<Chat[]>;
  findById(id: string): Promise<Chat | null>;
  findByLid(lid: string): Promise<Chat | null>;
  findByPhone(phone: string): Promise<Chat | null>;
  create(chat: Chat): Promise<Chat>;
  update(id: string, chat: Partial<Chat>): Promise<Chat>;
  delete(id: string): Promise<void>;
}
