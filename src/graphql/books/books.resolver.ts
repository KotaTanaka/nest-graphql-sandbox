import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// from app
import { Book } from '@/domain/books/book.entity';
import { BooksService } from '@/domain/books/books.service';
import { CreateBookBody } from '@/domain/books/dto/create-book-body.dto';

@Resolver('Books')
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Query(() => Book)
  async book(@Args('id', { type: () => String }) id: string): Promise<Book> {
    return await this.booksService.findOne(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('data') data: CreateBookBody): Promise<Book> {
    return await this.booksService.create(data);
  }

  @Mutation(() => String)
  async deleteBook(
    @Args('id', { type: () => String }) id: string,
  ): Promise<string> {
    return await this.booksService.delete(id);
  }
}
