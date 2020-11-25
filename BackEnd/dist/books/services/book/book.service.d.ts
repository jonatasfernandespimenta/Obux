import { Repository } from 'typeorm';
import { BookEntity } from '../../domain/book-domain/book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    getBooks(): Promise<BookEntity[]>;
    getBook(_id: number): Promise<BookEntity[]>;
    deleteBook(id: string): Promise<void>;
    createBook(newBook: any): Promise<any>;
}
