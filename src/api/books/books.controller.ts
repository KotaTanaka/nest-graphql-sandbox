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
import { BooksService } from '@/api/books/books.service';
import { Book } from '@/api/books/book.entity';
import { CreateBookBody } from '@/api/books/dto/create-book-body.dto';
import { UpdateBookBody } from '@/api/books/dto/update-book-body.dto';
import { SuccessResponse } from '@/api/model/success-response.model';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async getBook(@Param() params): Promise<Book> {
    return await this.bookService.findOne(params.id);
  }

  @Post()
  async registerBook(@Body() body: CreateBookBody): Promise<SuccessResponse> {
    const result = await this.bookService.create(body);
    return new SuccessResponse(result.id);
  }

  @Put(':id')
  async updateBook(
    @Param() params,
    @Body() body: UpdateBookBody,
  ): Promise<SuccessResponse> {
    const result = await this.bookService.update(params.id, body);
    return new SuccessResponse(result.id);
  }

  @Delete(':id')
  async deleteBook(@Param() params): Promise<SuccessResponse> {
    const id = await this.bookService.delete(params.id);
    return new SuccessResponse(id);
  }
}
