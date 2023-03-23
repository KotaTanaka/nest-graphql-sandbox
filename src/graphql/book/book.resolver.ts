import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBookInput } from '@/domain/books/input/create-book.input';
import { BookEntity } from '@/domain/books/book.entity';
import { BookService } from '@/domain/books/book.service';
import { UpdateBookInput } from '@/domain/books/input/update-book.input';

@Resolver(() => BookEntity)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query(() => [BookEntity])
  async listBooks() {
    return this.bookService.findAll();
  }

  @Query(() => BookEntity)
  async getBook(@Args('id', { type: () => String }) id: string) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => BookEntity)
  async createBook(@Args('data') data: CreateBookInput) {
    return this.bookService.create(data);
  }

  @Mutation(() => BookEntity)
  async updateBook(
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdateBookInput,
  ): Promise<BookEntity> {
    return this.bookService.update(id, data);
  }

  @Mutation(() => BookEntity)
  async deleteBook(
    @Args('id', { type: () => String }) id: string,
  ): Promise<BookEntity> {
    return this.bookService.delete(id);
  }
}
