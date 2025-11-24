import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface GetMeUseCaseOutput {
  phone?: string;
  platform?: string;
  deviceManufacturer?: string;
  deviceModel?: string;
  osVersion?: string;
  waVersion?: string;
  status: string;
  error?: string;
}

export interface IGetMeUseCase {
  execute(): Promise<GetMeUseCaseOutput>;
}

@Injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(): Promise<GetMeUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.get<any>('/status');

      return {
        phone: response.phone,
        platform: response.platform,
        deviceManufacturer: response.deviceManufacturer,
        deviceModel: response.deviceModel,
        osVersion: response.osVersion,
        waVersion: response.waVersion,
        status: response.connected ? 'connected' : 'disconnected',
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message || 'Failed to get instance status',
      };
    }
  }
}
