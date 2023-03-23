import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from '@/domain/books/book.service';
import { CreateBookInput } from '@/domain/books/input/create-book.input';
import { UpdateBookInput } from '@/domain/books/input/update-book.input';
import { BookEntity } from '@/domain/books/book.entity';

@Controller('api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  listBooks(): Promise<BookEntity[]> {
    return this.bookService.findAll();
  }
  @Get(':id')
  async getBook(@Param() params: { id: string }): Promise<BookEntity> {
    return this.bookService.findOne(params.id);
  }

  @Post()
  async createBook(@Body() body: CreateBookInput): Promise<BookEntity> {
    return this.bookService.create(body);
  }

  @Put(':id')
  async updateBook(
    @Param() params: { id: string },
    @Body() body: UpdateBookInput,
  ): Promise<BookEntity> {
    return this.bookService.update(params.id, body);
  }

  @Delete(':id')
  async deleteBook(@Param() params: { id: string }): Promise<BookEntity> {
    return this.bookService.delete(params.id);
  }
}
