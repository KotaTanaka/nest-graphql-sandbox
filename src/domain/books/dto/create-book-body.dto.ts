import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookBody {
  @Field() readonly name: string;
  @Field() readonly outline: string;
  @Field() readonly author: string;
  @Field() readonly publisher: string;
  @Field() readonly category: string;
  @Field() readonly price: number;
  @Field() readonly releasedAt: string;
}
