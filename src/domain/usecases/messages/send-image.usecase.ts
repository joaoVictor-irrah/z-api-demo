import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface SendImageUseCaseInput {
  phone: string;
  image: string;
  caption?: string;
}

export interface SendImageUseCaseOutput {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ISendImageUseCase {
  execute(input: SendImageUseCaseInput): Promise<SendImageUseCaseOutput>;
}

@Injectable()
export class SendImageUseCase implements ISendImageUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(input: SendImageUseCaseInput): Promise<SendImageUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.post<any>('/send-image', {
        phone: input.phone,
        image: input.image,
        caption: input.caption || '',
      });

      return {
        success: true,
        messageId: response.messageId || response.id,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Failed to send image message',
      };
    }
  }
}
