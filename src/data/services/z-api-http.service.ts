import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { getEnvConfig } from '../../config/env.config';

@Injectable()
export class ZApiHttpService {
  private readonly logger = new Logger(ZApiHttpService.name);
  private readonly baseUrl: string;
  private readonly clientToken: string;

  constructor(private readonly httpService: HttpService) {
    const config = getEnvConfig();
    this.baseUrl = config.zApiBaseUrl;
    this.clientToken = config.zApiClientToken;
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      this.logger.log(`GET ${this.baseUrl}${endpoint}`);
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}${endpoint}`, {
          headers: {
            'Client-Token': this.clientToken,
          },
        }),
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error on GET ${endpoint}`, error);
      throw error;
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      this.logger.log(`POST ${this.baseUrl}${endpoint}`);
      const response = await firstValueFrom(
        this.httpService.post(`${this.baseUrl}${endpoint}`, data, {
          headers: {
            'Client-Token': this.clientToken,
            'Content-Type': 'application/json',
          },
        }),
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error on POST ${endpoint}`, error);
      throw error;
    }
  }
}
