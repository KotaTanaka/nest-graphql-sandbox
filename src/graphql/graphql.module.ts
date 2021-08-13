import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from '@/graphql/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/graphql/schema.gql',
    }),
    BooksModule,
  ],
})
export class BooksGqlModule {}
