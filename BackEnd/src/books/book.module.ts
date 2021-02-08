import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookService } from './services/book/book.service';
import { BookController } from './controllers/books/book.controller';
import { BookEntity } from './domain/book-domain/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule { }
