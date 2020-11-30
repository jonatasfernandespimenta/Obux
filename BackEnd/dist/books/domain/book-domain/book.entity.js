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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookEntity = void 0;
const transaction_entity_1 = require("../../../chats/domain/transaction-domain/transaction.entity");
const user_entity_1 = require("../../../users/domain/user-domain/user.entity");
const typeorm_1 = require("typeorm");
let BookEntity = class BookEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BookEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "titulo", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "editora", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "autor", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "ano", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "genero", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "qualidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BookEntity.prototype, "disponibilidade", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "sinopse", void 0);
__decorate([
    typeorm_1.Column({ default: ' ' }),
    __metadata("design:type", String)
], BookEntity.prototype, "foto", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.books),
    __metadata("design:type", user_entity_1.UserEntity)
], BookEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => transaction_entity_1.TransactionEntity, transaction => transaction.book),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], BookEntity.prototype, "transaction", void 0);
BookEntity = __decorate([
    typeorm_1.Entity()
], BookEntity);
exports.BookEntity = BookEntity;
//# sourceMappingURL=book.entity.js.map