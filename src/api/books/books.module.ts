import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// from app
import { Book } from '@/domain/books/book.entity';
import { BooksService } from '@/domain/books/books.service';
import { BooksController } from '@/api/books/books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
