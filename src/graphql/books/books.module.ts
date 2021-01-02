import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Book } from '@/domain/books/book.entity';
import { BooksService } from '@/domain/books/books.service';
import { BooksResolver } from '@/graphql/books/books.resolver';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
})
export class BooksModule {
  constructor(private readonly connection: Connection) {}
}
