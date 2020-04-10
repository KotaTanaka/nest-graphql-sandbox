import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

// from app
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookBody, UpdateBookBody } from './book.dto';

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
  async registerBook(@Body() body: CreateBookBody): Promise<string> {
    await this.bookService.create(body);
    return 'OK';
  }

  @Put(':id')
  async updateBook(
    @Param() params,
    @Body() body: UpdateBookBody,
  ): Promise<string> {
    await this.bookService.update(params.id, body);
    return 'OK';
  }

  @Delete(':id')
  async deleteBook(@Param() params): Promise<string> {
    await this.bookService.delete(params.id);
    return 'OK';
  }
}
