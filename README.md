**_nest-graphql-sandbox_**

_[Frontend - next-frontend-sandbox](https://github.com/KotaTanaka/next-frontend-sandbox)_

## About

NestJS + TypeScript + GraphQL でのバックエンド開発の素振り  
書籍管理アプリの GraphQL サーバー

## Tech Stack

- [TypeScript](https://github.com/microsoft/TypeScript)
- [Nest.js](https://github.com/nestjs/nest) <img src="https://nestjs.com/img/logo_text.svg" width="80" alt="Nest Logo" />
- [Prisma](https://www.prisma.io/) <img src="https://prismalens.vercel.app/header/logo-dark.svg" width="80" alt="Prisma Logo" />
- [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start) <img src="https://graphql.org/img/brand/logos/logo-wordmark.svg" width="80" alt="GraphQL Logo" />

## Requirements

- Node `v18.x`
- Yarn `v1.x`
- Docker, docker-compose

## Getting Started

#### Setup

```sh
npm i -g @nestjs/cli
```

#### Run

```sh
# Create env file
cp .env.sample .env

# Launch DB
docker compose up -d

# Instal node modules
yarn

# Run local server
yarn start:dev
```

Run on http://localhost:3090

#### Utility commands

```sh
# DB Migration
yarn prisma migrate dev --name {migration_name}

# Generate(Update) Prisma client
yarn prisma generate

# Open Prisma studio(http://localhost:5555)
yarn prisma studio
```

## Endpoints

### GraphQL

`/graphql`

| Type     | Name       | Description |
| :------- | :--------- | :---------- |
| Query    | listBooks  | Read (List) |
| Query    | getBook    | Read (One)  |
| Mutation | createBook | Create      |
| Mutation | updateBook | Update      |
| Mutation | deleteBook | Delete      |

### REST API

| Method | Path             | Description |
| :----- | :--------------- | :---------- |
| GET    | `/api/books`     | Read (List) |
| GET    | `/api/books/:id` | Read (One)  |
| POST   | `/api/books`     | Create      |
| PUT    | `/api/books/:id` | Update      |
| DELETE | `/api/books/:id` | Delete      |
