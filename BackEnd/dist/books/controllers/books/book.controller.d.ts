import { BookService } from '../../services/book/book.service';
export declare class BookController {
    private readonly book;
    constructor(book: BookService);
    getBook(params: any): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    getBooks(): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    getBookByName(titulo: any): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    delBook(params: any): Promise<void>;
    updateBook(params: any, book: any): Promise<{
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
    } & import("../../domain/book-domain/book.entity").BookEntity>;
    uploadSingle(file: any): any;
    createBook(newBook: any): Promise<any>;
}
