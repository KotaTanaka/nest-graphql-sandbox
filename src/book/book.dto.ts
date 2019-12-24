/** ブック登録リクエストボディ */
export class CreateBookBody {
  readonly name: string;
  readonly outline: string;
  readonly author: string;
  readonly publisher: string;
  readonly category: string;
  readonly price: number;
  readonly releasedAt: string;
}

/** ブック編集リクエストボディ */
// tslint:disable-next-line: max-classes-per-file
export class UpdateBookBody {
  readonly name?: string;
  readonly outline?: string;
  readonly author?: string;
  readonly publisher?: string;
  readonly category?: string;
  readonly price?: number;
  readonly releasedAt?: string;
}
