import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface SendTextUseCaseInput {
  phone: string;
  message: string;
}

export interface SendTextUseCaseOutput {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ISendTextUseCase {
  execute(input: SendTextUseCaseInput): Promise<SendTextUseCaseOutput>;
}

@Injectable()
export class SendTextUseCase implements ISendTextUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(input: SendTextUseCaseInput): Promise<SendTextUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.post<any>('/send-text', {
        phone: input.phone,
        message: input.message,
      });

      return {
        success: true,
        messageId: response.messageId || response.id,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Failed to send text message',
      };
    }
  }
}
