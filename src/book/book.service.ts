import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// from app
import { CreateBookBody, UpdateBookBody } from './book.dto';
import { Book } from './book.entity';
import { brotliDecompressSync } from 'zlib';

@Injectable()
export class BookService {
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

  async create(body: CreateBookBody) {
    await this.bookRepository.save(body);
  }

  async update(id: string, body: UpdateBookBody) {
    const book = await this.findOne(id);
    book.name = body.name || book.name;
    book.outline = body.outline || book.outline;
    book.author = body.author || book.author;
    book.publisher = body.publisher || book.publisher;
    book.category = body.category || book.category;
    book.price = body.price || book.price;
    book.releasedAt = body.releasedAt || book.releasedAt;
    await this.bookRepository.save(book);
  }
}
