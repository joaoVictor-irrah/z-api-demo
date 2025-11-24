import { Module } from '@nestjs/common';
import { MessagesController } from '../controllers/messages.controller';
import { SendTextUseCase } from '../../domain/usecases/messages/send-text.usecase';
import { SendImageUseCase } from '../../domain/usecases/messages/send-image.usecase';
import { SendVideoUseCase } from '../../domain/usecases/messages/send-video.usecase';

@Module({
  controllers: [MessagesController],
  providers: [
    {
      provide: 'ISendTextUseCase',
      useClass: SendTextUseCase,
    },
    {
      provide: 'ISendImageUseCase',
      useClass: SendImageUseCase,
    },
    {
      provide: 'ISendVideoUseCase',
      useClass: SendVideoUseCase,
    },
  ],
})
export class MessagesModule {}
