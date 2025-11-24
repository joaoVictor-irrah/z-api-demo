export interface SendVideoUseCaseInput {
  phone: string;
  videoUrl: string;
  caption?: string;
}

export interface SendVideoUseCaseOutput {
  success: boolean;
  messageId?: string;
}

export interface ISendVideoUseCase {
  execute(input: SendVideoUseCaseInput): Promise<SendVideoUseCaseOutput>;
}

export class SendVideoUseCase implements ISendVideoUseCase {
  async execute(input: SendVideoUseCaseInput): Promise<SendVideoUseCaseOutput> {
    // TODO: Implementar lógica de envio de vídeo
    throw new Error('Method not implemented');
  }
}
