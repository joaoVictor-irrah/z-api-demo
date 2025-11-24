import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface GetQrCodeUseCaseOutput {
  value?: string;
  image?: string;
  status: string;
  error?: string;
}

export interface IGetQrCodeUseCase {
  execute(): Promise<GetQrCodeUseCaseOutput>;
}

@Injectable()
export class GetQrCodeUseCase implements IGetQrCodeUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(): Promise<GetQrCodeUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.get<any>('/qr-code/image');

      return {
        value: response.value,
        image: response.image,
        status: response.status || 'success',
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message || 'Failed to get QR Code',
      };
    }
  }
}
