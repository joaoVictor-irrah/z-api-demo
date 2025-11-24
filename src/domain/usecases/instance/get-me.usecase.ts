export interface GetMeUseCaseOutput {
  id: string;
  name: string;
  phone: string;
  status: string;
}

export interface IGetMeUseCase {
  execute(): Promise<GetMeUseCaseOutput>;
}

export class GetMeUseCase implements IGetMeUseCase {
  async execute(): Promise<GetMeUseCaseOutput> {
    // TODO: Implementar lógica para obter informações da instância
    throw new Error('Method not implemented');
  }
}
