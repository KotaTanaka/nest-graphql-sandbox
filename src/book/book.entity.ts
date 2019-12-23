import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// from app
import { IBook } from './book.interface';

@Entity()
export class Book implements IBook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  outline: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  category: string;

  @Column('int')
  price: number;

  @Column()
  releasedAt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
