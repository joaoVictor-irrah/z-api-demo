import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API up & running';
  }

  getStatus() {
    return {
      name: 'Z-API Demo',
      version: '1.0.0',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
