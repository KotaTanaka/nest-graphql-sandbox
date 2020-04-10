import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// from app
import { BookService } from '@/book/book.service';
import { BookController } from '@/book/book.controller';
import { Book } from '@/book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
  exports: [TypeOrmModule],
})
export class BookModule {}
