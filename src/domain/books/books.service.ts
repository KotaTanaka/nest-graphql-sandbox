import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// from app
import { Book } from '@/domain/books/book.entity';
import { CreateBookBody } from '@/domain/books/dto/create-book-body.dto';
import { UpdateBookBody } from '@/domain/books/dto/update-book-body.dto';

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

  async create(body: CreateBookBody): Promise<Book> {
    return await this.bookRepository.save(body);
  }

  async update(id: string, body: UpdateBookBody): Promise<Book> {
    const book = await this.findOne(id);
    book.name = body.name || book.name;
    book.outline = body.outline || book.outline;
    book.author = body.author || book.author;
    book.publisher = body.publisher || book.publisher;
    book.category = body.category || book.category;
    book.price = body.price || book.price;
    book.releasedAt = body.releasedAt || book.releasedAt;

    return await this.bookRepository.save(book);
  }

  async delete(id: string): Promise<string> {
    const book = await this.findOne(id);
    await this.bookRepository.delete(book.id);

    return book.id;
  }
}
