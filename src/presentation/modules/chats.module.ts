import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ChatsController } from '../controllers/chats.controller';
import { GetChatsUseCase } from '../../domain/usecases/chats/get-chats.usecase';
import { ChatRepository } from '../../data/repositories/chat.repository';
import { DatabaseModule } from '../../data/database/database.module';
import { ZApiHttpService } from '../../data/services/z-api-http.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [ChatsController],
  providers: [
    ZApiHttpService,
    {
      provide: 'IChatRepository',
      useClass: ChatRepository,
    },
    {
      provide: 'IGetChatsUseCase',
      useClass: GetChatsUseCase,
    },
  ],
})
export class ChatsModule {}
