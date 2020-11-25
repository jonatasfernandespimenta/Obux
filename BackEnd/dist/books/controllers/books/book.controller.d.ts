import { BookService } from '../../services/book/book.service';
export declare class BookController {
    private readonly book;
    constructor(book: BookService);
    getBook(params: any): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    getBooks(): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    delBook(params: any): Promise<void>;
    uploadSingle(file: any): any;
    createBook(newBook: any): Promise<any>;
}
