export interface IBook {
  /** ID */
  id: string;
  /** 書籍名 */
  name: string;
  /** あらすじ */
  outline: string;
  /** 著者 */
  author: string;
  /** 出版社 */
  publisher: string;
  /** カテゴリ */
  category: string;
  /** 価格 */
  price: number;
  /** 発売日 */
  releasedAt: string;
  /** 登録日 */
  createdAt: Date;
  /** 更新日 */
  updatedAt: Date;
}
