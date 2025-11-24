import { Module } from '@nestjs/common';
import { ChatsController } from '../controllers/chats.controller';
import { GetChatsUseCase } from '../../domain/usecases/chats/get-chats.usecase';
import { ChatRepository } from '../../data/repositories/chat.repository';
import { DatabaseModule } from '../../data/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ChatsController],
  providers: [
    {
      provide: 'IChatRepository',
      useClass: ChatRepository,
    },
    {
      provide: 'IGetChatsUseCase',
      useFactory: (chatRepository) => {
        return new GetChatsUseCase(chatRepository);
      },
      inject: ['IChatRepository'],
    },
  ],
})
export class ChatsModule {}
