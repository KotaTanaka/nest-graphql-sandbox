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
