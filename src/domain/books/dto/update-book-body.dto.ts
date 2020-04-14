import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateBookBody {
  @Field(() => String, { nullable: true })
  readonly name?: string;

  @Field(() => String, { nullable: true })
  readonly outline?: string;

  @Field(() => String, { nullable: true })
  readonly author?: string;

  @Field(() => String, { nullable: true })
  readonly publisher?: string;

  @Field(() => String, { nullable: true })
  readonly category?: string;

  @Field(() => Number, { nullable: true })
  readonly price?: number;

  @Field(() => String, { nullable: true })
  readonly releasedAt?: string;
}
