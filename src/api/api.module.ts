import { BookService } from '@/domain/books/book.service';
import { PrismaService } from '@/lib/prisma.service';
import { Module } from '@nestjs/common';

import { BookController } from './book/book.controller';

@Module({
  providers: [PrismaService, BookService],
  controllers: [BookController],
})
export class APIModule {}
