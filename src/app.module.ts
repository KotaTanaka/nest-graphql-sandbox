import { Module } from '@nestjs/common';

// from app
import { BooksApiModule } from '@/api/api.module';
import { BooksGqlModule } from '@/graphql/graphql.module';

@Module({
  imports: [
    BooksApiModule,
    BooksGqlModule,
  ],
})
export class AppModule {}
