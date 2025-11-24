import { Injectable, Inject, Logger } from '@nestjs/common';
import { Chat } from '../../entities/chat.entity';
import { IChatRepository } from '../../repositories/chat.repository.interface';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';
import { v4 as uuidv4 } from 'uuid';

export interface IGetChatsUseCase {
  execute(): Promise<Chat[]>;
}

@Injectable()
export class GetChatsUseCase implements IGetChatsUseCase {
  constructor(
    @Inject('IChatRepository')
    private readonly chatRepository: IChatRepository,
    private readonly zApiHttpService: ZApiHttpService,
  ) {}

  async execute(): Promise<Chat[]> {
    try {
      const response = await this.zApiHttpService.get<any[]>('/chats');

      if (response && Array.isArray(response)) {
        for (const chat of response) {
          const lid = chat.lid;
          const phone = chat.phone;

          if (!lid && !phone) {
            continue;
          }

          const existingByLid = lid
            ? await this.chatRepository.findByLid(lid)
            : null;
          const existingByPhone = phone
            ? await this.chatRepository.findByPhone(phone)
            : null;

          if (existingByLid || existingByPhone) {
            continue;
          }

          const newChat = new Chat(
            uuidv4(),
            chat.name || phone || lid,
            phone || '',
            lid || '',
          );

          await this.chatRepository.create(newChat);
        }
      }

      return await this.chatRepository.findAll();
    } catch (error) {
      return await this.chatRepository.findAll();
    }
  }
}
