import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InstanceController } from '../controllers/instance.controller';
import { GetMeUseCase } from '../../domain/usecases/instance/get-me.usecase';
import { DisconnectUseCase } from '../../domain/usecases/instance/disconnect.usecase';
import { GetQrCodeUseCase } from '../../domain/usecases/instance/get-qr-code.usecase';
import { ZApiHttpService } from '../../data/services/z-api-http.service';

@Module({
  imports: [HttpModule],
  controllers: [InstanceController],
  providers: [
    ZApiHttpService,
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
