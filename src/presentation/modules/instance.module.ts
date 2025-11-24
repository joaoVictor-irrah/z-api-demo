import { Module } from '@nestjs/common';
import { InstanceController } from '../controllers/instance.controller';
import { GetMeUseCase } from '../../domain/usecases/instance/get-me.usecase';
import { DisconnectUseCase } from '../../domain/usecases/instance/disconnect.usecase';
import { GetQrCodeUseCase } from '../../domain/usecases/instance/get-qr-code.usecase';

@Module({
  controllers: [InstanceController],
  providers: [
    {
      provide: 'IGetMeUseCase',
      useClass: GetMeUseCase,
    },
    {
      provide: 'IDisconnectUseCase',
      useClass: DisconnectUseCase,
    },
    {
      provide: 'IGetQrCodeUseCase',
      useClass: GetQrCodeUseCase,
    },
  ],
})
export class InstanceModule {}
