import { Injectable, Inject } from '@nestjs/common';
import { Chat } from '../../entities/chat.entity';
import { IChatRepository } from '../../repositories/chat.repository.interface';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

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
      const response = await this.zApiHttpService.get<any>('/chats');

      if (response && Array.isArray(response)) {
        for (const chat of response) {
          const existingChat = await this.chatRepository.findById(chat.id);

          if (!existingChat) {
            const newChat = new Chat(
              chat.id,
              chat.name || chat.phone,
              chat.phone,
              chat.lid || chat.id,
            );
            await this.chatRepository.create(newChat);
          }
        }
      }

      return await this.chatRepository.findAll();
    } catch (error) {
      return await this.chatRepository.findAll();
    }
  }
}
