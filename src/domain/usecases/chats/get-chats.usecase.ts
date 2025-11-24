import { Chat } from '../../entities/chat.entity';
import { IChatRepository } from '../../repositories/chat.repository.interface';

export interface IGetChatsUseCase {
  execute(): Promise<Chat[]>;
}

export class GetChatsUseCase implements IGetChatsUseCase {
  constructor(private readonly chatRepository: IChatRepository) {}

  async execute(): Promise<Chat[]> {
    // TODO: Implementar lógica de busca de chats
    throw new Error('Method not implemented');
  }
}
