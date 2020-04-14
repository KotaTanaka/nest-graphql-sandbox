***nest-books-api***

*[Frontend -  next-books-spa](https://github.com/KotaTanaka/next-books-spa)*

## About

*TBW*

## Technology

* [Nest.js](https://github.com/nestjs/nest) <img src="https://nestjs.com/img/logo_text.svg" width="80" alt="Nest Logo" />
* [TypeScript](https://github.com/microsoft/TypeScript)
* [TypeORM](https://github.com/typeorm/typeorm)

## Require

* Node
* Docker, docker-compose

## Getting Started

#### Install

```bash
$ npm i -g @nestjs/cli
```

```bash
$ git clone git@github.com:KotaTanaka/nest-books-api.git
$ cd nest-books-api
$ yarn
```

#### Run

```bash
$ docker-compose up -d
$ yarn start:dev
```

→ http://localhost:3090

#### Utility Commands

* Show MySQL

```bash
$ docker exec -it books_mysql bash -c "mysql -u root -p"
```

* Lint


```bash
# Lint error check & Auot format
$ yarn lint:fix
```

## Endpoints

### GraphQL

`/graphql`

| Type | Name | Description |
|:---|:---|:---|
| Query | books | 全件取得 |
| Query | book | 一件取得 |
| Mutation | createBook | 登録 |
| Mutation | updateBook | 編集 |
| Mutation | deleteBook | 削除 |

### REST API

| Method | Path | Description |
|:---|:---|:---|
| GET | `/books` | 全件取得 |
| GET | `/books/:id` | 一件取得 |
| POST | `/books` | 登録 |
| PUT | `/books/:id` | 編集 |
| DELETE | `/books/:id` | 削除 |
