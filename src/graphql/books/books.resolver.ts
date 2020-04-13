import { Resolver, Query, Args } from '@nestjs/graphql';

// from app
import { Book } from '@/graphql/books/book.entity';
import { BooksService } from '@/graphql/books/books.service';

@Resolver('Books')
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return await this.booksService.findAll();
  }
}
