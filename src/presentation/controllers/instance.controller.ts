import { Controller, Get, Inject } from '@nestjs/common';
import { IGetMeUseCase } from '../../domain/usecases/instance/get-me.usecase';
import { IDisconnectUseCase } from '../../domain/usecases/instance/disconnect.usecase';
import { IGetQrCodeUseCase } from '../../domain/usecases/instance/get-qr-code.usecase';

@Controller('instance')
export class InstanceController {
  constructor(
    @Inject('IGetMeUseCase')
    private readonly getMeUseCase: IGetMeUseCase,
    @Inject('IDisconnectUseCase')
    private readonly disconnectUseCase: IDisconnectUseCase,
    @Inject('IGetQrCodeUseCase')
    private readonly getQrCodeUseCase: IGetQrCodeUseCase,
  ) {}

  @Get('me')
  async getMe() {
    // TODO: Implementar endpoint
    return await this.getMeUseCase.execute();
  }

  @Get('disconnect')
  async disconnect() {
    // TODO: Implementar endpoint
    return await this.disconnectUseCase.execute();
  }

  @Get('qr-code')
  async getQrCode() {
    // TODO: Implementar endpoint
    return await this.getQrCodeUseCase.execute();
  }
}
