import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// from app
import { BooksService } from '@/api/books/books.service';
import { BooksController } from '@/api/books/books.controller';
import { Book } from '@/api/books/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [TypeOrmModule],
})
export class BooksModule {}
