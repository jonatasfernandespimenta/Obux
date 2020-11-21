import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from '../../domain/book-domain/book.entity';

@Injectable()
export class BookService { 
  constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) {  }

  async getBooks() {
    return await this.bookRepository.find();
  };

  async getBook(_id: number) {
    return await this.bookRepository.find({
      where: [{ "id": _id }]
    })
  };

  async createBook(newBook) {
    return await this.bookRepository.save(newBook);
  }

}
