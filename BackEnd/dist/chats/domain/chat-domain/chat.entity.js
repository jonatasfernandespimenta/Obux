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
exports.ChatEntity = void 0;
const user_entity_1 = require("../../../users/domain/user-domain/user.entity");
const messages_entity_1 = require("./messages.entity");
const typeorm_1 = require("typeorm");
let ChatEntity = class ChatEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "chattingWith", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.chats),
    __metadata("design:type", Array)
], ChatEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => messages_entity_1.MessagesEntity, msg => msg.chatId),
    __metadata("design:type", Array)
], ChatEntity.prototype, "messages", void 0);
ChatEntity = __decorate([
    typeorm_1.Entity()
], ChatEntity);
exports.ChatEntity = ChatEntity;
//# sourceMappingURL=chat.entity.js.map