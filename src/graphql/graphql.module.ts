import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

// from app
import { BooksModule } from '@/graphql/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'src/graphql/schema.gql',
    }),
    BooksModule,
  ],
})
export class BooksGqlModule {}
