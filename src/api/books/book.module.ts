import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// from app
import { BookService } from '@/api/books/book.service';
import { BookController } from '@/api/books/book.controller';
import { Book } from '@/api/books/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
  exports: [TypeOrmModule],
})
export class BookModule {}
