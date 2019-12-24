import { IBook } from './book.interface';

/** ブック登録リクエストボディ */
export class CreateBookBody implements IBook {
  readonly id: string;
  readonly name: string;
  readonly outline: string;
  readonly author: string;
  readonly publisher: string;
  readonly category: string;
  readonly price: number;
  readonly releasedAt: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
