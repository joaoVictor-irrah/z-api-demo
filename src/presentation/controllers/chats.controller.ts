import { Controller, Get, Inject } from '@nestjs/common';
import { IGetChatsUseCase } from '../../domain/usecases/chats/get-chats.usecase';

@Controller('chats')
export class ChatsController {
  constructor(
    @Inject('IGetChatsUseCase')
    private readonly getChatsUseCase: IGetChatsUseCase,
  ) {}

  @Get('get-chats')
  async getChats() {
    return await this.getChatsUseCase.execute();
  }
}
