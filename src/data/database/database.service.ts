import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { Database, open } from 'sqlite';
import * as sqlite3 from 'sqlite3';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(DatabaseService.name);
  private db: Database | null = null;

  async onModuleInit() {
    await this.connect();
    await this.createTables();
  }

  async onModuleDestroy() {
    await this.close();
  }

  private async connect(): Promise<void> {
    if (this.db) {
      return;
    }

    try {
      this.logger.log('Conectando ao banco de dados SQLite...');
      this.db = await open({
        filename: 'database.sqlite',
        driver: sqlite3.Database,
      });
      this.logger.log('Conectado ao banco de dados SQLite com sucesso');
    } catch (error) {
      this.logger.error(
        'Erro ao conectar ao banco de dados SQLite',
        error as Error,
      );
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) {
      throw new Error('Banco de dados não inicializado');
    }

    this.logger.log('Criando tabela chats (se não existir)...');

    const createChatsTableSql = `
      CREATE TABLE IF NOT EXISTS chats (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        lid TEXT NOT NULL
      );
    `;

    try {
      await this.db.exec(createChatsTableSql);
      this.logger.log('Tabela chats verificada/criada com sucesso');
    } catch (error) {
      this.logger.error('Erro ao criar tabela chats', error as Error);
      throw error;
    }
  }

  getDatabase(): Database {
    if (!this.db) {
      throw new Error('Banco de dados não inicializado');
    }
    return this.db;
  }

  private async close(): Promise<void> {
    if (this.db) {
      this.logger.log('Fechando conexão com o banco de dados SQLite...');
      await this.db.close();
      this.db = null;
      this.logger.log('Conexão com o banco de dados encerrada');
    }
  }
}
