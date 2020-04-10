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
import { CreateBookBody } from './dto/create-book-body.dto';
import { UpdateBookBody } from './dto/update-book-body.dto';
import { SuccessResponse } from './model/success-response.model';

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
