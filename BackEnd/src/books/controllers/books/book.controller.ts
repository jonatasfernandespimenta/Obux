import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookService } from '../../services/book/book.service';

@Controller('books')
export class BookController {
  constructor(
    private readonly book: BookService,
  ) {  }

  @Get(':id')
  getBook(@Param() params) {
    return this.book.getBook(params.id);
  }

  @Get('/')
  getBooks() {
    return this.book.getBooks();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }

  @Post('create')
  createBook(@Body() newBook) {
    return this.book.createBook(newBook);
  }
}
