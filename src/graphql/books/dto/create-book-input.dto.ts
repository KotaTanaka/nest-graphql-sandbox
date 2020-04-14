import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field() name: string;
  @Field() outline: string;
  @Field() author: string;
  @Field() publisher: string;
  @Field() category: string;
  @Field() price: number;
  @Field() releasedAt: string;
}
