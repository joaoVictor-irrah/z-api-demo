export interface SendTextUseCaseInput {
  phone: string;
  message: string;
}

export interface SendTextUseCaseOutput {
  success: boolean;
  messageId?: string;
}

export interface ISendTextUseCase {
  execute(input: SendTextUseCaseInput): Promise<SendTextUseCaseOutput>;
}

export class SendTextUseCase implements ISendTextUseCase {
  async execute(input: SendTextUseCaseInput): Promise<SendTextUseCaseOutput> {
    // TODO: Implementar lógica de envio de texto
    throw new Error('Method not implemented');
  }
}
