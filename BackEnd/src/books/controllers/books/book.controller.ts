import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookService } from '../../services/book/book.service';
import { diskStorage } from 'multer'
import { extname, join } from 'path'
import { JwtCustomGuard } from 'src/users/guards/customGuard.guard';
import { IsOwner } from 'src/users/guards/isOwner.guard';

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

  @Post('/name')
  getBookByName(@Body() titulo) {
    console.log(titulo.titulo)
    const response = this.book.getBooksByName(titulo.titulo);
    console.log(response);
    return response;
  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Delete('delete/:id')
  delBook(@Param() params) {
    return this.book.deleteBook(params.id);
  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Put('update/:id')
  updateBook(@Param() params, @Body() book) {
    console.log('UPDATE BOOK!!!!!')
    return this.book.updateBook(params.id, book);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  uploadSingle(@UploadedFile() file) {
    console.log(file)
    return file;
  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Post('create')
  createBook(@Body() newBook) {
    console.log(newBook)
    return this.book.createBook(newBook);
  }

}
