import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// from app
import { Book } from '@/graphql/books/book.entity';
import { CreateBookInput } from '@/graphql/books/dto/create-book-input.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookRepository.findOne(id);
  }

  async create(data: CreateBookInput): Promise<Book> {
    return await this.bookRepository.save(data);
  }

  async delete(id: string): Promise<string> {
    const book = await this.findOne(id);
    await this.bookRepository.delete(book.id);

    return book.id;
  }
}
