import { Controller, Get, Post, Param, Body } from '@nestjs/common';

// from app
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookBody } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return await this.bookService.findOne(params.id);
  }

  @Post()
  async registerBook(@Body() body: CreateBookBody) {
    await this.bookService.create(body);
  }
}
