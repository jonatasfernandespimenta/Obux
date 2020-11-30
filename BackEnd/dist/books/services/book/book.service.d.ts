import { Repository } from 'typeorm';
import { BookEntity } from '../../domain/book-domain/book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    getBooks(): Promise<BookEntity[]>;
    getBooksByName(titulo: String): Promise<BookEntity[]>;
    getBook(_id: number): Promise<BookEntity[]>;
    deleteBook(id: string): Promise<void>;
    updateBook(_id: number, book: BookEntity): Promise<{
        id: number;
        titulo: String;
        editora: String;
        autor: String;
        ano: String;
        genero: String;
        qualidade: String;
        disponibilidade: Number;
        sinopse: String;
        foto: String;
        user: import("../../../users/domain/user-domain/user.entity").UserEntity;
        transaction: import("../../../chats/domain/transaction-domain/transaction.entity").TransactionEntity;
    } & BookEntity>;
    createBook(newBook: any): Promise<any>;
}
