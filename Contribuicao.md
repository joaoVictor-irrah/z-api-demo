# Guia de Contribuição - Z-API Demo

Este guia fornece instruções detalhadas sobre como contribuir para o projeto [z-api-demo](https://github.com/joaoVictor-irrah/z-api-demo), incluindo como fazer fork, utilizar commits convencionais, criar branches e abrir Pull Requests.

---

## 📋 Índice

1. [Como Fazer Fork do Repositório](#1-como-fazer-fork-do-repositório)
2. [Padrão de Commits Convencionais](#2-padrão-de-commits-convencionais)
3. [Como Criar Branches](#3-como-criar-branches)
4. [Como Criar um Novo Endpoint na API](#4-como-criar-um-novo-endpoint-na-api)
5. [Como Abrir um Pull Request](#5-como-abrir-um-pull-request)

---

## 1. Como Fazer Fork do Repositório

### Passo 1: Acessar o Repositório Original

Acesse o repositório: https://github.com/joaoVictor-irrah/z-api-demo

### Passo 2: Criar o Fork

1. Clique no botão **"Fork"** no canto superior direito da página
2. Selecione sua conta pessoal como destino do fork
3. Aguarde o GitHub criar uma cópia do repositório na sua conta

### Passo 3: Clonar o Fork Localmente

```bash
# Clone o seu fork (substitua SEU-USUARIO pelo seu username do GitHub)
git clone https://github.com/SEU-USUARIO/z-api-demo.git

# Entre no diretório do projeto
cd z-api-demo

# Adicione o repositório original como remote upstream
git remote add upstream https://github.com/joaoVictor-irrah/z-api-demo.git

# Verifique os remotes configurados
git remote -v
```

### Passo 4: Manter o Fork Atualizado

```bash
# Busque as atualizações do repositório original
git fetch upstream

# Mude para a branch principal
git checkout main

# Faça merge das atualizações
git merge upstream/main

# Envie as atualizações para o seu fork
git push origin main
```

---

## 2. Padrão de Commits Convencionais

O projeto utiliza o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para manter um histórico de commits organizado e semântico.

### Estrutura do Commit

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Tipos de Commit

| Tipo       | Descrição                | Exemplo                                         |
| ---------- | ------------------------ | ----------------------------------------------- |
| `feat`     | Nova funcionalidade      | `feat: adicionar endpoint de usuários`          |
| `fix`      | Correção de bug          | `fix: corrigir validação de email`              |
| `docs`     | Documentação             | `docs: atualizar README com exemplos`           |
| `style`    | Formatação de código     | `style: formatar código com prettier`           |
| `refactor` | Refatoração de código    | `refactor: simplificar lógica de autenticação`  |
| `test`     | Testes                   | `test: adicionar testes para endpoint de login` |
| `chore`    | Tarefas de manutenção    | `chore: atualizar dependências`                 |
| `perf`     | Melhorias de performance | `perf: otimizar query de busca`                 |
| `ci`       | Integração contínua      | `ci: adicionar workflow do GitHub Actions`      |
| `build`    | Sistema de build         | `build: configurar webpack`                     |
| `revert`   | Reverter commit          | `revert: reverter commit abc123`                |

### Exemplos Práticos

```bash
# Adicionar nova funcionalidade
git commit -m "feat: adicionar endpoint GET /api/messages"

# Corrigir bug
git commit -m "fix: corrigir erro de timeout na conexão"

# Adicionar documentação
git commit -m "docs: adicionar exemplos de uso da API"

# Commit com escopo
git commit -m "feat(auth): implementar autenticação JWT"

# Commit com breaking change
git commit -m "feat!: alterar estrutura de resposta da API

BREAKING CHANGE: o campo 'data' agora retorna um array ao invés de objeto"

# Commit com corpo e rodapé
git commit -m "fix: corrigir validação de número de telefone

O regex anterior não validava corretamente números internacionais.
Agora aceita formatos com código de país.

Closes #123"
```

### Boas Práticas

- ✅ Use o imperativo no presente: "adicionar" ao invés de "adicionado"
- ✅ Não capitalize a primeira letra da descrição
- ✅ Não adicione ponto final na descrição
- ✅ Mantenha a descrição com no máximo 72 caracteres
- ✅ Use o corpo do commit para explicar "o quê" e "por quê", não "como"

---

## 3. Como Criar Branches

### Nomenclatura de Branches

Siga o padrão: `tipo/descricao-curta`

**Exemplos:**

```
feature/novo-endpoint-mensagens
fix/corrigir-validacao-telefone
docs/atualizar-readme
refactor/melhorar-estrutura-rotas
```

### Criando uma Branch

```bash
# Certifique-se de estar na branch principal atualizada
git checkout main
git pull upstream main

# Crie e mude para a nova branch
git checkout -b feature/novo-endpoint-usuarios

# Ou crie a branch sem mudar para ela
git branch feature/novo-endpoint-usuarios
```

### Trabalhando na Branch

```bash
# Faça suas alterações no código
# ...

# Adicione os arquivos modificados
git add .

# Faça o commit seguindo o padrão convencional
git commit -m "feat: adicionar endpoint POST /api/users"

# Envie a branch para o seu fork
git push origin feature/novo-endpoint-usuarios
```

---

## 4. Como Criar um Novo Endpoint na API

### Passo a Passo

#### 1. Criar a Branch

```bash
git checkout main
git pull upstream main
git checkout -b feature/endpoint-nome-do-recurso
```

#### 2. Estrutura Básica de um Endpoint

Siga a estrutura dos endpoints que já foram implementados para criar os novos endpoints.

#### 3. Testar o Endpoint

```bash
# Testar GET
curl http://localhost:3000/api/users

# Testar POST
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"João","email":"joao@example.com"}'
```

Ou você pode realizar os testes via **Postman** ou **Insomnia**.

#### 4. Fazer Commits

```bash
git add .
git commit -m "feat: adicionar endpoint GET /api/users"

git add .
git commit -m "feat: adicionar endpoint POST /api/users"

git add .
git commit -m "test: adicionar testes para endpoints de usuários"

git add .
git commit -m "docs: documentar endpoints de usuários"
```

#### 5. Enviar para o Fork

```bash
git push origin feature/endpoint-nome-do-recurso
```

---

## 5. Como Abrir um Pull Request

### Passo 1: Acessar o GitHub

Após fazer push da sua branch, acesse seu fork no GitHub:

```
https://github.com/SEU-USUARIO/z-api-demo
```

### Passo 2: Iniciar o Pull Request

1. Você verá um banner amarelo com a mensagem **"Compare & pull request"** - clique nele
2. Ou clique na aba **"Pull requests"** e depois em **"New pull request"**

### Passo 3: Configurar o Pull Request

**Base repository:** `joaoVictor-irrah/z-api-demo` (base: `main`)  
**Head repository:** `SEU-USUARIO/z-api-demo` (compare: `feature/sua-branch`)

### Passo 4: Preencher as Informações

#### Título

Use o padrão de commits convencionais:

```
feat: adicionar endpoint de gerenciamento de usuários
```

#### Descrição

Seja detalhado e claro:

```markdown
## 📝 Descrição

Este PR adiciona novos endpoints para gerenciamento de usuários na API.

## ✨ Mudanças

- Adiciona endpoint GET /api/users para listar usuários
- Adiciona endpoint POST /api/users para criar usuários
- Adiciona validação de dados de entrada
- Adiciona testes unitários para os novos endpoints
- Atualiza documentação da API

## 🧪 Como Testar

1. Clone o repositório e instale as dependências
2. Execute `npm start`
3. Teste o endpoint GET: `curl http://localhost:3000/api/users`
4. Teste o endpoint POST: `curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Teste","email":"teste@example.com"}'`

## 📸 Screenshots (se aplicável)

[Adicione screenshots se relevante]

## ✅ Checklist

- [x] O código segue o padrão do projeto
- [x] Commits seguem o padrão Conventional Commits
- [x] Testes foram adicionados/atualizados
- [x] Documentação foi atualizada
- [x] Código foi testado localmente
```

### Passo 5: Criar o Pull Request

1. Clique em **"Create pull request"**
2. Aguarde a revisão do mantenedor do projeto
3. Responda aos comentários e faça ajustes se necessário

### Passo 6: Fazer Alterações Após Feedback

Se o revisor solicitar mudanças:

```bash
# Faça as alterações necessárias no código

# Adicione e faça commit
git add .
git commit -m "fix: corrigir validação conforme feedback"

# Envie para a mesma branch
git push origin feature/sua-branch
```

O Pull Request será atualizado automaticamente!

### Passo 7: Após o Merge

Quando seu PR for aceito e mesclado:

```bash
# Volte para a branch main
git checkout main

# Atualize com as mudanças do repositório original
git pull upstream main

# Envie para o seu fork
git push origin main

# Delete a branch local (opcional)
git branch -d feature/sua-branch

# Delete a branch remota (opcional)
git push origin --delete feature/sua-branch
```

---

## 🎯 Resumo do Fluxo Completo

```bash
# 1. Fork e clone
git clone https://github.com/SEU-USUARIO/z-api-demo.git
cd z-api-demo
git remote add upstream https://github.com/joaoVictor-irrah/z-api-demo.git

# 2. Crie uma branch
git checkout -b feature/novo-endpoint

# 3. Faça suas alterações e commits
git add .
git commit -m "feat: adicionar novo endpoint"

# 4. Envie para seu fork
git push origin feature/novo-endpoint

# 5. Abra o Pull Request no GitHub

# 6. Após merge, atualize seu fork
git checkout main
git pull upstream main
git push origin main
```

---

## 📚 Recursos Adicionais

- [Documentação do GitHub sobre Forks](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Como Escrever Boas Mensagens de Commit](https://chris.beams.io/posts/git-commit/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## ❓ Dúvidas?

Se tiver dúvidas, abra uma issue no repositório ou entre em contato com os mantenedores do projeto.

**Boas contribuições! 🚀**
