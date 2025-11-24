export interface GetQrCodeUseCaseOutput {
  qrCode: string;
  status: string;
}

export interface IGetQrCodeUseCase {
  execute(): Promise<GetQrCodeUseCaseOutput>;
}

export class GetQrCodeUseCase implements IGetQrCodeUseCase {
  async execute(): Promise<GetQrCodeUseCaseOutput> {
    // TODO: Implementar lógica para obter QR Code
    throw new Error('Method not implemented');
  }
}
