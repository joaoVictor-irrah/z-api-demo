export interface SendImageUseCaseInput {
  phone: string;
  imageUrl: string;
  caption?: string;
}

export interface SendImageUseCaseOutput {
  success: boolean;
  messageId?: string;
}

export interface ISendImageUseCase {
  execute(input: SendImageUseCaseInput): Promise<SendImageUseCaseOutput>;
}

export class SendImageUseCase implements ISendImageUseCase {
  async execute(input: SendImageUseCaseInput): Promise<SendImageUseCaseOutput> {
    // TODO: Implementar lógica de envio de imagem
    throw new Error('Method not implemented');
  }
}
