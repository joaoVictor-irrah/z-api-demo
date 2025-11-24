import { Injectable } from '@nestjs/common';
import { ZApiHttpService } from '../../../data/services/z-api-http.service';

export interface GetMeUseCaseOutput {
  id?: string;
  name?: string;
  token?: string;
  connected: boolean;
  status: string;
  created?: string;
  due?: number;
  paymentStatus?: string;
  autoReadMessage?: boolean;
  callRejectAuto?: boolean;
  callRejectMessage?: string;
  receiveCallbackSentByMe?: boolean;
  receivedAndDeliveryCallbackUrl?: string;
  presenceChatCallbackUrl?: string;
  disconnectedCallbackUrl?: string;
  deliveryCallbackUrl?: string;
  connectedCallbackUrl?: string;
  messageStatusCallbackUrl?: string;
  receivedCallbackUrl?: string;
  error?: string;
}

export interface IGetMeUseCase {
  execute(): Promise<GetMeUseCaseOutput>;
}

@Injectable()
export class GetMeUseCase implements IGetMeUseCase {
  constructor(private readonly zApiHttpService: ZApiHttpService) {}

  async execute(): Promise<GetMeUseCaseOutput> {
    try {
      const response = await this.zApiHttpService.get<any>('/me');

      return {
        id: response.id,
        name: response.name,
        token: response.token,
        connected: response.connected,
        status: response.connected ? 'connected' : 'disconnected',
        created: response.created,
        due: response.due,
        paymentStatus: response.paymentStatus,
        autoReadMessage: response.autoReadMessage,
        callRejectAuto: response.callRejectAuto,
        callRejectMessage: response.callRejectMessage,
        receiveCallbackSentByMe: response.receiveCallbackSentByMe,
        receivedAndDeliveryCallbackUrl: response.receivedAndDeliveryCallbackUrl,
        presenceChatCallbackUrl: response.presenceChatCallbackUrl,
        disconnectedCallbackUrl: response.disconnectedCallbackUrl,
        deliveryCallbackUrl: response.deliveryCallbackUrl,
        connectedCallbackUrl: response.connectedCallbackUrl,
        messageStatusCallbackUrl: response.messageStatusCallbackUrl,
        receivedCallbackUrl: response.receivedCallbackUrl,
      };
    } catch (error) {
      return {
        connected: false,
        status: 'error',
        error: error.message || 'Failed to get instance status',
      };
    }
  }
}
