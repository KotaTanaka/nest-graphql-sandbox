import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/lib/prisma.service';

import { CreateBookInput } from './input/create-book.input';
import { UpdateBookInput } from './input/update-book.input';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<BookEntity[]> {
    return this.prismaService.book.findMany();
  }

  async findOne(id: string): Promise<BookEntity> {
    return this.prismaService.book.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: CreateBookInput): Promise<BookEntity> {
    return this.prismaService.book.create({
      data: {
        name: data.name,
        outline: data.outline,
        author: data.author,
        publisher: data.publisher,
        category: data.category,
        price: data.price,
        releasedAt: data.releasedAt,
      },
    });
  }

  async update(id: string, body: UpdateBookInput): Promise<BookEntity> {
    const data = await this.findOne(id);
    data.name = body.name || data.name;
    data.outline = body.outline || data.outline;
    data.author = body.author || data.author;
    data.publisher = body.publisher || data.publisher;
    data.category = body.category || data.category;
    data.price = body.price || data.price;
    data.releasedAt = body.releasedAt || data.releasedAt;

    return this.prismaService.book.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string): Promise<BookEntity> {
    return this.prismaService.book.delete({
      where: {
        id,
      },
    });
  }
}
