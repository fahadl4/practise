/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddBookArgs {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}
