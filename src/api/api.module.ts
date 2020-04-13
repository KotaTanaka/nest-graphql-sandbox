import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// from app
import { HelloController } from '@/api/hello.controller';
import { BooksModule } from '@/api/books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule],
  controllers: [HelloController],
})
export class BooksApiModule {
  constructor(private readonly connection: Connection) {}
}
