import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBook } from '@/domain/books/book.interface';

@Entity()
@ObjectType()
export class Book extends BaseEntity implements IBook {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column({ length: 100 })
  name: string;

  @Field(() => String)
  @Column('text')
  outline: string;

  @Field(() => String)
  @Column()
  author: string;

  @Field(() => String)
  @Column()
  publisher: string;

  @Field(() => String)
  @Column()
  category: string;

  @Field(() => Number)
  @Column('int')
  price: number;

  @Field(() => String)
  @Column()
  releasedAt: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
