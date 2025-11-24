# 🇧🇷 Demo de Integração com Z-API (WhatsApp) usando NestJS + Clean Architecture

## Visão Geral

Este projeto é uma **demo de integração com a [Z-API](https://z-api.io/)**, uma API para WhatsApp, construída com **NestJS** seguindo o padrão de **Clean Architecture**.

A aplicação expõe endpoints simples para:

- Obter o **QR Code** de conexão da instância;
- **Desconectar** a instância;
- Obter **dados do dispositivo** conectado;
- Enviar mensagens de **texto**, **imagem** e **vídeo** via WhatsApp.

O projeto usa **SQLite** como banco de dados local, com uma tabela `chats` para armazenar informações básicas de contatos/conversas.

---

## Tecnologias Utilizadas

- **Node.js** + **TypeScript**
- **NestJS**
- **Z-API** (integração com WhatsApp)
- **SQLite** (`sqlite` + `sqlite3`)
- Arquitetura em camadas (**Clean Architecture**)

---

## Arquitetura (Clean Architecture)

A estrutura segue uma separação clara de responsabilidades:

### Domain

- `entities/` – Entidades de domínio (ex.: `Chat`)
- `repositories/` – Interfaces de repositórios
- `usecases/` – Casos de uso (interactors)
  - `messages/` – Envio de texto, imagem e vídeo
  - `chats/` – Consulta de chats
  - `instance/` – Operações da instância (QR Code, desconectar, dados do dispositivo)

### Data

- `database/` – Configuração do SQLite (`DatabaseService`, `DatabaseModule`)
- `repositories/` – Implementações concretas dos repositórios (ex.: `ChatRepository`)

### Presentation

- `controllers/` – Controllers HTTP (NestJS)
  - `MessagesController`
  - `ChatsController`
  - `InstanceController`
- `modules/` – Módulos da camada de apresentação

---

## Endpoints Disponíveis

### Messages (envio de mensagens)

Base path: `/messages`

- `POST /messages/send-text`  
  Envia uma mensagem de texto.

- `POST /messages/send-image`  
  Envia uma mensagem de imagem (com URL).

- `POST /messages/send-video`  
  Envia uma mensagem de vídeo (com URL).

### Chats

Base path: `/chats`

- `GET /chats/get-chats`  
  Retorna a lista de chats armazenados na tabela `chats` (demo).

### Instance (instância Z-API / dispositivo)

Base path: `/instance`

- `GET /instance/me`  
  Retorna dados do dispositivo/instância conectada.

- `GET /instance/disconnect`  
  Desconecta a instância do WhatsApp.

- `GET /instance/qr-code`  
  Retorna o QR Code para conectar o dispositivo ao WhatsApp.

---

## Banco de Dados

O projeto utiliza **SQLite** com uma tabela principal:

### Tabela `chats`

| Coluna  | Tipo | Descrição                                    |
| ------- | ---- | -------------------------------------------- |
| `id`    | TEXT | UUID - chave primária                        |
| `name`  | TEXT | Nome do contato/chat                         |
| `phone` | TEXT | Telefone (formato internacional recomendado) |
| `lid`   | TEXT | Identificador lógico usado pela integração   |

O banco é inicializado automaticamente na primeira execução, criando o arquivo `database.sqlite` na raiz do projeto (ou diretório configurado).

---

## Pré-requisitos

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**
- Conta/configuração válida na **Z-API** (instanceToken, instanceId, clientToken)

---

## Instalação

```bash
# Instalar dependências
npm install

# ou
yarn install
```

---

## Execução do Projeto

```bash
# Desenvolvimento (watch mode)
npm run start:dev

# Produção (build + start)
npm run build
npm run start
```

Ao iniciar, o NestJS irá:

1. Conectar ao banco SQLite.
2. Criar a tabela `chats` (se não existir).
3. Expor os endpoints HTTP descritos acima.

Você pode testar a API com ferramentas como **Insomnia**, **Postman** ou **curl**.

---

## Fluxo Básico de Uso

1. **Obter QR Code**
   - Chamar `GET /instance/qr-code`
   - Escanear o QR Code com o WhatsApp do dispositivo.

2. **Verificar dispositivo conectado**
   - Chamar `GET /instance/me`.

3. **Enviar mensagens**
   - `POST /messages/send-text` para texto
   - `POST /messages/send-image` para imagem
   - `POST /messages/send-video` para vídeo

4. **Consultar chats (demo)**
   - `GET /chats/get-chats` para listar os registros da tabela `chats`.

5. **Desconectar instância**
   - `GET /instance/disconnect`.

---

## Status/Health Check

O projeto inclui um controller simples (`AppController` / `AppService`) para health-check:

- `GET /` – mensagem simples indicando que a API está no ar.
- `GET /status` – status básico em JSON (nome, versão, timestamp, etc.).

---

## Estrutura de Pastas

```
src/
├── domain/
│   ├── entities/
│   │   └── chat.entity.ts
│   ├── repositories/
│   │   └── chat.repository.interface.ts
│   └── usecases/
│       ├── messages/
│       │   ├── send-text.usecase.ts
│       │   ├── send-image.usecase.ts
│       │   └── send-video.usecase.ts
│       ├── chats/
│       │   └── get-chats.usecase.ts
│       └── instance/
│           ├── get-me.usecase.ts
│           ├── disconnect.usecase.ts
│           └── get-qr-code.usecase.ts
├── data/
│   ├── database/
│   │   ├── database.service.ts
│   │   └── database.module.ts
│   └── repositories/
│       └── chat.repository.ts
└── presentation/
    ├── controllers/
    │   ├── messages.controller.ts
    │   ├── chats.controller.ts
    │   └── instance.controller.ts
    └── modules/
        ├── messages.module.ts
        ├── chats.module.ts
        └── instance.module.ts
```

---

## Observações

- Esta é uma **demo**: os casos de uso e integrações com Z-API podem ser simples e focados apenas em ilustrar o fluxo.
- A arquitetura foi pensada para facilitar a evolução, testes e integração com mais ferramentas.

---

# 🇺🇸 Z-API (WhatsApp) Integration Demo using NestJS + Clean Architecture

## Overview

This project is a **demo integration with [Z-API](https://z-api.io/)**, a WhatsApp API, built with **NestJS** following the **Clean Architecture** pattern.

The application exposes simple endpoints to:

- Get the instance connection **QR Code**;
- **Disconnect** the instance;
- Get **device information** of the connected WhatsApp;
- Send basic **text**, **image** and **video** messages via WhatsApp.

The project uses **SQLite** as a local database with a `chats` table to store basic contact/chat information.

---

## Tech Stack

- **Node.js** + **TypeScript**
- **NestJS**
- **Z-API** (WhatsApp integration)
- **SQLite** (`sqlite` + `sqlite3`)
- Layered structure using **Clean Architecture**

---

## Architecture (Clean Architecture)

The project structure follows clear separation of concerns:

### Domain

- `entities/` – Domain entities (e.g., `Chat`)
- `repositories/` – Repository interfaces
- `usecases/` – Use cases (interactors)
  - `messages/` – Send text, image, video
  - `chats/` – Fetch chats
  - `instance/` – Instance operations (QR Code, disconnect, device data)

### Data

- `database/` – SQLite configuration (`DatabaseService`, `DatabaseModule`)
- `repositories/` – Concrete repository implementations (e.g., `ChatRepository`)

### Presentation

- `controllers/` – HTTP controllers (NestJS)
  - `MessagesController`
  - `ChatsController`
  - `InstanceController`
- `modules/` – Presentation layer modules

---

## Available Endpoints

### Messages

Base path: `/messages`

- `POST /messages/send-text`  
  Sends a text message.

- `POST /messages/send-image`  
  Sends an image message (via URL).

- `POST /messages/send-video`  
  Sends a video message (via URL).

### Chats

Base path: `/chats`

- `GET /chats/get-chats`  
  Returns the list of chats stored in the `chats` table (demo).

### Instance (Z-API / device)

Base path: `/instance`

- `GET /instance/me`  
  Returns information about the connected device/instance.

- `GET /instance/disconnect`  
  Disconnects the WhatsApp instance.

- `GET /instance/qr-code`  
  Returns the QR Code for pairing the WhatsApp device.

---

## Database

The project uses **SQLite** with a main table:

### Table `chats`

| Column  | Type | Description                                     |
| ------- | ---- | ----------------------------------------------- |
| `id`    | TEXT | UUID - primary key                              |
| `name`  | TEXT | Contact/chat name                               |
| `phone` | TEXT | Phone number (international format recommended) |
| `lid`   | TEXT | Logical identifier used by the integration      |

The database is initialized automatically at startup, creating the `database.sqlite` file at the project root (or configured directory) and ensuring the `chats` table exists.

---

## Requirements

- **Node.js** (LTS recommended)
- **npm** or **yarn**
- A valid **Z-API** account/configuration (instanceToken, instanceId, clientToken.)

---

## Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

---

## Running the Project

```bash
# Development (watch mode)
npm run start:dev

# Production (build + start)
npm run build
npm run start
```

On startup, NestJS will:

1. Connect to the SQLite database.
2. Create the `chats` table if it does not exist.
3. Expose the HTTP endpoints described above.

You can test the API using **Insomnia**, **Postman**, or **curl**.

---

## Basic Usage Flow

1. **Get QR Code**
   - Call `GET /instance/qr-code`
   - Scan the QR Code with your WhatsApp app.

2. **Check connected device**
   - Call `GET /instance/me`.

3. **Send messages**
   - `POST /messages/send-text` for text
   - `POST /messages/send-image` for image
   - `POST /messages/send-video` for video

4. **Query chats (demo)**
   - `GET /chats/get-chats` to list records from the `chats` table.

5. **Disconnect instance**
   - Call `GET /instance/disconnect`.

---

## Status / Health Check

The project includes a simple controller (`AppController` / `AppService`) for health-check:

- `GET /` – basic message indicating the API is running.
- `GET /status` – basic JSON status (name, version, timestamp, etc.).

---

## Folder Structure

```
src/
├── domain/
│   ├── entities/
│   │   └── chat.entity.ts
│   ├── repositories/
│   │   └── chat.repository.interface.ts
│   └── usecases/
│       ├── messages/
│       │   ├── send-text.usecase.ts
│       │   ├── send-image.usecase.ts
│       │   └── send-video.usecase.ts
│       ├── chats/
│       │   └── get-chats.usecase.ts
│       └── instance/
│           ├── get-me.usecase.ts
│           ├── disconnect.usecase.ts
│           └── get-qr-code.usecase.ts
├── data/
│   ├── database/
│   │   ├── database.service.ts
│   │   └── database.module.ts
│   └── repositories/
│       └── chat.repository.ts
└── presentation/
    ├── controllers/
    │   ├── messages.controller.ts
    │   ├── chats.controller.ts
    │   └── instance.controller.ts
    └── modules/
        ├── messages.module.ts
        ├── chats.module.ts
        └── instance.module.ts
```

---

## Notes

- This is a **demo**: use cases and Z-API integrations are intentionally kept simple to illustrate the flow.
- The architecture is designed to be easily extendable, testable and to allow integration with other tools.

---

## License

MIT

---

## Author

JoaoMadeiraxyz

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
