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
exports.MessagesEntity = void 0;
const typeorm_1 = require("typeorm");
const chat_entity_1 = require("./chat.entity");
let MessagesEntity = class MessagesEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MessagesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MessagesEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MessagesEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToOne(type => chat_entity_1.ChatEntity, chat => chat.messages),
    __metadata("design:type", chat_entity_1.ChatEntity)
], MessagesEntity.prototype, "chatId", void 0);
MessagesEntity = __decorate([
    typeorm_1.Entity()
], MessagesEntity);
exports.MessagesEntity = MessagesEntity;
//# sourceMappingURL=messages.entity.js.map