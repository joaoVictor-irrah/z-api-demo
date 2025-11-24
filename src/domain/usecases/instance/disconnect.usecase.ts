export interface DisconnectUseCaseOutput {
  success: boolean;
  message: string;
}

export interface IDisconnectUseCase {
  execute(): Promise<DisconnectUseCaseOutput>;
}

export class DisconnectUseCase implements IDisconnectUseCase {
  async execute(): Promise<DisconnectUseCaseOutput> {
    // TODO: Implementar lógica de desconexão
    throw new Error('Method not implemented');
  }
}
