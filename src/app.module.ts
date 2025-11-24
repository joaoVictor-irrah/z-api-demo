import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './data/database/database.module';
import { MessagesModule } from './presentation/modules/messages.module';
import { ChatsModule } from './presentation/modules/chats.module';
import { InstanceModule } from './presentation/modules/instance.module';

@Module({
  imports: [DatabaseModule, MessagesModule, ChatsModule, InstanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}