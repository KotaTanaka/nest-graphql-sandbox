***nest-graphql-sandbox***

*[Frontend - next-frontend-sandbox](https://github.com/KotaTanaka/next-frontend-sandbox)*

## About

NestJS + TypeScript + GraphQL でのサーバーサイド開発の素振り  
書籍管理アプリの GraphQL サーバー

## Tech Stack

- [Nest.js](https://github.com/nestjs/nest) <img src="https://nestjs.com/img/logo_text.svg" width="80" alt="Nest Logo" />
- [TypeScript](https://github.com/microsoft/TypeScript)
- [TypeORM](https://github.com/typeorm/typeorm)
- GraphQL - [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start)

## Requirements

- Node `v18.x`
- Yarn `v1.x`
- Docker, docker-compose

## Getting Started

#### Install

```sh
# NestJS CLI のグローバルインストール
npm i -g @nestjs/cli
```

```sh
# 依存モジュールのインストール
yarn
```

#### Run

```sh
# データベース起動
docker-compose up -d

# サーバー起動
yarn start:dev
```

→ http://localhost:3090

## Utility Commands

- Show MySQL

```sh
docker-compose exec mysql bash -c "mysql -u root -p"
```

- Code format

```sh
yarn lint:fix
```

## Endpoints

### GraphQL

`/graphql`

| Type | Name | Description |
|:---|:---|:---|
| Query | books | Read (List) |
| Query | book | Read (One) |
| Mutation | createBook | Create |
| Mutation | updateBook | Update |
| Mutation | deleteBook | Delete |

### REST API

| Method | Path | Description |
|:---|:---|:---|
| GET | `/books` | Read (List) |
| GET | `/books/:id` | Read (One) |
| POST | `/books` | Create |
| PUT | `/books/:id` | Update |
| DELETE | `/books/:id` | Delete |
