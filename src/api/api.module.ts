import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// from app
import { HelloController } from '@/api/hello.controller';
import { BookModule } from '@/api/books/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BookModule],
  controllers: [HelloController],
})
export class BooksApiModule {
  constructor(private readonly connection: Connection) {}
}
