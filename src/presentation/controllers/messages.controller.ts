import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ISendTextUseCase } from '../../domain/usecases/messages/send-text.usecase';
import { ISendImageUseCase } from '../../domain/usecases/messages/send-image.usecase';
import { ISendVideoUseCase } from '../../domain/usecases/messages/send-video.usecase';

@Controller('messages')
export class MessagesController {
  constructor(
    @Inject('ISendTextUseCase')
    private readonly sendTextUseCase: ISendTextUseCase,
    @Inject('ISendImageUseCase')
    private readonly sendImageUseCase: ISendImageUseCase,
    @Inject('ISendVideoUseCase')
    private readonly sendVideoUseCase: ISendVideoUseCase,
  ) {}

  @Post('send-text')
  async sendText(@Body() body: any) {
    return await this.sendTextUseCase.execute(body);
  }

  @Post('send-image')
  async sendImage(@Body() body: any) {
    return await this.sendImageUseCase.execute(body);
  }

  @Post('send-video')
  async sendVideo(@Body() body: any) {
    return await this.sendVideoUseCase.execute(body);
  }
}
