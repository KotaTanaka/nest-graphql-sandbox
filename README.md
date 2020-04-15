***nest-books-api***

*[Frontend -  next-books-spa](https://github.com/KotaTanaka/next-books-spa)*

## About

Books data CRUD server with GraphQL / REST API.

## Technology

* [Nest.js](https://github.com/nestjs/nest) <img src="https://nestjs.com/img/logo_text.svg" width="80" alt="Nest Logo" />
* [TypeScript](https://github.com/microsoft/TypeScript)
* [TypeORM](https://github.com/typeorm/typeorm)

## Require

* Node `v12.x`
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

## Utility Commands

* Show MySQL

```bash
$ docker exec -it books_mysql bash -c "mysql -u root -p"
```

* Lint


```bash
# Lint error check & Auto format
$ yarn lint:fix
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
