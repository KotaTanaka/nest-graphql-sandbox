import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksApiModule } from '@/api/api.module';
import { BooksGqlModule } from '@/graphql/graphql.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksApiModule, BooksGqlModule],
})
export class AppModule {}
