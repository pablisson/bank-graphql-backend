# 🛠️ Backend GraphQL com Koa, TypeScript e MongoDB

Este projeto é uma API backend construída com foco em performance e escalabilidade, utilizando **GraphQL**, **Relay**, **KoaJS**, **MongoDB** e **TypeScript**. Ideal para aplicações modernas que exigem consultas flexíveis, respostas otimizadas e tipagem segura.

---

## 📦 Pacotes Instalados

### 🧩 Fundamentais

| Pacote                                | Descrição                                                     |
| ------------------------------------- | ------------------------------------------------------------- |
| `koa`                                 | Framework minimalista de servidor web baseado em middlewares. |
| `graphql`                             | Core da linguagem GraphQL.                                    |
| `graphql-yoga`                        | Server GraphQL completo baseado em Koa, com suporte a Relay.  |
| `mongoose`                            | ODM para MongoDB, usado para modelar os dados da aplicação.   |
| `graphql-relay`                       | Suporte à especificação Relay (conexões, IDs globais, etc).   |

---

### 🧪 Testes 

| Pacote             | Descrição                                                              |
| ------------------ | ---------------------------------------------------------------------- |
| `jest`             | Framework de testes moderno e performático.                            |
| `ts-jest`          | Integração entre Jest e TypeScript.                                    |
| `babel-jest`       | Usado para compilar código com Babel dentro do Jest (caso necessário). |
| `@types/jest`      | Tipagem do Jest para TypeScript.                                       |
| `supertest`        | Biblioteca para testar rotas HTTP de forma simples.                    |
| `@types/supertest` | Tipagem do Supertest.                                                  |

---

### 🛠️ TypeScript e DevTools 

| Pacote                      | Descrição                                                  |
| --------------------------- | ---------------------------------------------------------- |
| `typescript`                | Superset do JavaScript com tipagem estática.               |
| `ts-node-dev`               | Execução com hot-reload para projetos TS (dev server).     |
| `@types/koa`                | Tipagem do Koa.                                            |
| `@types/koa-router`         | Tipagem para `koa-router`.                                 |
| `@types/koa-bodyparser`     | Tipagem para o bodyparser do Koa.                          |
| `eslint`                    | Linting para manter o código limpo.                        |
| `@rocketseat/eslint-config` | Configuração opinativa para ESLint seguindo boas práticas. |

---

### 🧱 GraphQL Schema & Integrações 

| Pacote                  | Descrição                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------- |
| `@graphql-tools/schema` | Permite criar esquemas GraphQL de forma programática (com `makeExecutableSchema`). |
| `@graphql-tools/merge`  | Permite megear os typeDefs e os resolvers, permitindo a separação de arquivos.     |

---

### 🧪 Babel 

| Pacote                     | Descrição                                                    |
| -------------------------- | ------------------------------------------------------------ |
| `@babel/core`              | Babel core para transpilar código.                           |
| `@babel/preset-env`        | Preset que compila JS moderno para versões mais compatíveis. |
| `@babel/preset-typescript` | Suporte a TS no Babel (usado em conjunto com Jest).          |

---

### 🌐 Middlewares 

| Pacote           | Descrição                                                      |
| ---------------- | -------------------------------------------------------------- |
| `koa-router`     | Router para lidar com rotas em aplicações Koa.                 |
| `koa-bodyparser` | Middleware para interpretar `body` de requisições (JSON, etc). |
| `koa-graphql`    | Middleware alternativo para GraphQL via Koa.                   |


---

## 📂 Estrutura do projeto

```bash
src/
├── config/           # Configurações de ambiente, conexão Mongo, etc.
├── graphql/          # Tipos e definições GraphQL (typeDefs, resolvers).
├── loaders/          # Tipos e definições GraphQL
├── server/           # Inicializador do projeto
├── tests/            # Testes unitários e de integração
└── index.ts          # Arquivo de entrada da aplicação
```

## 🚀 Como Executar

Instalar dependências

```bash
npm i
```

Rodar a aplicação com hot reload

```bash
npm run dev
```

Executar os testes

```bash
npm run test
```
