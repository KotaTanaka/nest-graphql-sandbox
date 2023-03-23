import { Field, ID, ObjectType } from '@nestjs/graphql';
import type { Book } from '@prisma/client';

@ObjectType()
export class BookEntity implements Book {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  outline: string;

  @Field(() => String)
  author: string;

  @Field(() => String)
  publisher: string;

  @Field(() => String)
  category: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  releasedAt: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
