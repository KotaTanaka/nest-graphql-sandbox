import { Resolver, Query, Args } from '@nestjs/graphql';
import { Book } from '@/graphql/books/book';

const SAMPLE_BOOKS: Book[] = [
  {
    id: '0',
    name: 'A',
  },
  {
    id: '1',
    name: 'B',
  },
  {
    id: '2',
    name: 'C',
  },
];

@Resolver('Books')
export class BooksResolver {
  @Query(returns => [Book])
  async books(): Promise<Book[]> {
    return SAMPLE_BOOKS;
  }
}
