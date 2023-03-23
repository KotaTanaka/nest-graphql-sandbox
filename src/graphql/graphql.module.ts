import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as path from 'path';

import { BookService } from '@/domain/books/book.service';
import { PrismaService } from '@/lib/prisma.service';
import { BookResolver } from './book/book.resolver';

@Module({
  providers: [PrismaService, BookResolver, BookService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: path.join(process.cwd(), 'src/graphql/schema.gql'),
    }),
  ],
})
export class GQLModule {}
