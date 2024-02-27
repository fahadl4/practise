/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
    @Field((type) => Int)
    id: number;

    @Field()
    title: string;

    @Field((type) => Int)
    price: number;
}