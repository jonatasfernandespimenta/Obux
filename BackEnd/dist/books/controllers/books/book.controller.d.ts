import { BookService } from '../../services/book/book.service';
export declare class BookController {
    private readonly book;
    constructor(book: BookService);
    getBook(params: any): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    getBooks(): Promise<import("../../domain/book-domain/book.entity").BookEntity[]>;
    uploadFile(file: any): void;
    createBook(newBook: any): Promise<any>;
}
