/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';
import { Book as BookModel } from '../graphql'
import { AddBookArgs } from './args/add.book.args';

@Resolver(of => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) { }

  @Query(returns => [Book], { name: 'books' })
  getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks();
  }

  @Query(returns => Book, { name: 'findBookByID', nullable: true })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number): BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation(returns => String, { name: 'deleteBook' })
  deleteBookById(@Args({ name: 'bookId', type: () => Int }) id: number): string {
    return this.bookService.deleteBook(id);
  }

  @Mutation(returns => String, { name: 'addBook' })
  addbook(@Args('addBookArgs') addBookArgs: AddBookArgs): string {
    return this.bookService.addBook(addBookArgs)
  }

  @Mutation(returns => String, { name: 'updateBook' })
  updatebook(@Args({ name: 'bookId', type: () => Int }) id: number, @Args('updateBookArgs') updateBookArgs: AddBookArgs): string {
    return this.bookService.updateBook(id, updateBookArgs)
  }

}
