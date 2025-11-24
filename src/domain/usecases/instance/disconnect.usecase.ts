import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface DisconnectUseCaseOutput {
  success: boolean;
  message: string;
  error?: string;
}

export interface IDisconnectUseCase {
  execute(): Promise<DisconnectUseCaseOutput>;
}

@Injectable()
export class DisconnectUseCase implements IDisconnectUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(): Promise<DisconnectUseCaseOutput> {
    try {
      await this.zApiHttpService.get<any>('/disconnect');

      return {
        success: true,
        message: 'Instance disconnected successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to disconnect instance',
        error: error.message,
      };
    }
  }
}
