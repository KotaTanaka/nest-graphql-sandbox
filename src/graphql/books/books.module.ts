import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// from app
import { BooksResolver } from '@/graphql/books/books.resolver';
import { BooksService } from '@/graphql/books/books.service';
import { Book } from '@/graphql/books/book.entity';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
})
export class BooksModule {
  constructor(private readonly connection: Connection) {}
}
