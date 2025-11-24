import { Injectable } from '@nestjs/common';
import { IChatRepository } from '../../domain/repositories/chat.repository.interface';
import { Chat } from '../../domain/entities/chat.entity';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ChatRepository implements IChatRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<Chat[]> {
    const db = this.databaseService.getDatabase();
    const rows = await db.all<Chat[]>('SELECT id, name, phone, lid FROM chats');
    return rows;
  }

  async findById(id: string): Promise<Chat | null> {
    const db = this.databaseService.getDatabase();
    const row = await db.get<Chat>(
      'SELECT id, name, phone, lid FROM chats WHERE id = ?',
      id,
    );
    return row ?? null;
  }

  async findByLid(lid: string): Promise<Chat | null> {
    const db = this.databaseService.getDatabase();
    const row = await db.get<Chat>(
      'SELECT id, name, phone, lid FROM chats WHERE lid = ?',
      lid,
    );
    return row ?? null;
  }

  async findByPhone(phone: string): Promise<Chat | null> {
    const db = this.databaseService.getDatabase();
    const row = await db.get<Chat>(
      'SELECT id, name, phone, lid FROM chats WHERE phone = ?',
      phone,
    );
    return row ?? null;
  }

  async create(chat: Chat): Promise<Chat> {
    const db = this.databaseService.getDatabase();
    await db.run(
      'INSERT INTO chats (id, name, phone, lid) VALUES (?, ?, ?, ?)',
      chat.id,
      chat.name,
      chat.phone,
      chat.lid,
    );
    return chat;
  }

  async update(id: string, partial: Partial<Chat>): Promise<Chat> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new Error('Chat not found');
    }

    const updated: Chat = { ...existing, ...partial };

    const db = this.databaseService.getDatabase();
    await db.run(
      'UPDATE chats SET name = ?, phone = ?, lid = ? WHERE id = ?',
      updated.name,
      updated.phone,
      updated.lid,
      id,
    );

    return updated;
  }

  async delete(id: string): Promise<void> {
    const db = this.databaseService.getDatabase();
    await db.run('DELETE FROM chats WHERE id = ?', id);
  }
}
