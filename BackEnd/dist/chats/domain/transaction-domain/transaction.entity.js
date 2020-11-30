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
exports.TransactionEntity = void 0;
const user_entity_1 = require("../../../users/domain/user-domain/user.entity");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("../../../books/domain/book-domain/book.entity");
let TransactionEntity = class TransactionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "due", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.transactions),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, receiver => receiver.transactions),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "receiver", void 0);
__decorate([
    typeorm_1.ManyToOne(type => book_entity_1.BookEntity, book => book.transaction, { eager: true }),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "book", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], TransactionEntity.prototype, "accepted", void 0);
TransactionEntity = __decorate([
    typeorm_1.Entity()
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map