import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface SendVideoUseCaseInput {
  phone: string;
  video: string;
  caption?: string;
}

export interface SendVideoUseCaseOutput {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ISendVideoUseCase {
  execute(input: SendVideoUseCaseInput): Promise<SendVideoUseCaseOutput>;
}

@Injectable()
export class SendVideoUseCase implements ISendVideoUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(input: SendVideoUseCaseInput): Promise<SendVideoUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.post<any>('/send-video', {
        phone: input.phone,
        video: input.video,
        caption: input.caption || '',
      });

      return {
        success: true,
        messageId: response.messageId || response.id,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Failed to send video message',
      };
    }
  }
}
