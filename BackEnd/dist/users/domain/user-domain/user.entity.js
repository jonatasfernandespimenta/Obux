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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const book_entity_1 = require("../../../books/domain/book-domain/book.entity");
const chat_entity_1 = require("../../../chats/domain/chat-domain/chat.entity");
const transaction_entity_1 = require("../../../chats/domain/transaction-domain/transaction.entity");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "dataNasc", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserEntity.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "cpf", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "senha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "estado", void 0);
__decorate([
    typeorm_1.Column({ default: 'Olá, estou usando Obux' }),
    __metadata("design:type", String)
], UserEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ default: 'https://d32ogoqmya1dw8.cloudfront.net/images/serc/empty_user_icon_256.v2.png' }),
    __metadata("design:type", String)
], UserEntity.prototype, "file", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "givenrates", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "totalrates", void 0);
__decorate([
    typeorm_1.OneToMany(type => book_entity_1.BookEntity, book => book.user, { eager: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "books", void 0);
__decorate([
    typeorm_1.OneToMany(type => chat_entity_1.ChatEntity, chat => chat.user, { eager: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "chats", void 0);
__decorate([
    typeorm_1.OneToMany(type => transaction_entity_1.TransactionEntity, transaction => transaction.user, { eager: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "transactions", void 0);
__decorate([
    typeorm_1.OneToMany(type => transaction_entity_1.TransactionEntity, transaction => transaction.receiver, { eager: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "receivedTransactions", void 0);
UserEntity = __decorate([
    typeorm_1.Entity()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map