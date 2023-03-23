import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String) readonly name: string;
  @Field(() => String) readonly outline: string;
  @Field(() => String) readonly author: string;
  @Field(() => String) readonly publisher: string;
  @Field(() => String) readonly category: string;
  @Field(() => Number) readonly price: number;
  @Field(() => String) readonly releasedAt: string;
}
