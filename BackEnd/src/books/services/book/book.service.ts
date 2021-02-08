import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { BookEntity } from '../../domain/book-domain/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) {  }

  async getBooks() {
    return await this.bookRepository.find({
      order: { id: "DESC" }
    });
  };

  async getBooksByName(titulo: String) {
    return await this.bookRepository.find({
      titulo: Like('%' + titulo + '%'),
    });
  };

  async getBook(_id: number) {
    return await this.bookRepository.find({
      where: [{ "id": _id }],
      relations: ['user'],
    })
  };

  async deleteBook(id: string): Promise<void> {
    this.bookRepository.delete(id);
  }

  async updateBook(_id: number, book: BookEntity) {
    const property = await this.bookRepository.findOne({
      where: { id: _id }
    });

    return this.bookRepository.save({
      ...property,
      ...book
    });
  }

  async createBook(newBook) {
    const fileName = `http://192.168.100.68:3000/files/${newBook.foto}`;
    newBook.foto = fileName;
    return await this.bookRepository.save(newBook);
  }

}
