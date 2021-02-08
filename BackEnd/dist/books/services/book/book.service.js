"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("../../domain/book-domain/book.entity");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getBooks() {
        return await this.bookRepository.find({
            order: { id: "DESC" }
        });
    }
    ;
    async getBooksByName(titulo) {
        return await this.bookRepository.find({
            titulo: typeorm_2.Like('%' + titulo + '%'),
        });
    }
    ;
    async getBook(_id) {
        return await this.bookRepository.find({
            where: [{ "id": _id }],
            relations: ['user'],
        });
    }
    ;
    async deleteBook(id) {
        this.bookRepository.delete(id);
    }
    async updateBook(_id, book) {
        const property = await this.bookRepository.findOne({
            where: { id: _id }
        });
        return this.bookRepository.save(Object.assign(Object.assign({}, property), book));
    }
    async createBook(newBook) {
        const fileName = `http://192.168.100.68:3000/files/${newBook.foto}`;
        newBook.foto = fileName;
        return await this.bookRepository.save(newBook);
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map