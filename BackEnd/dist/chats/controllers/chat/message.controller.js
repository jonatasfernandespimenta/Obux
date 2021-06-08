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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("../../services/chat/chat.service");
const messages_service_1 = require("../../services/chat/messages.service");
const customGuard_guard_1 = require("../../../users/guards/customGuard.guard");
const isOwner_guard_1 = require("../../../users/guards/isOwner.guard");
let MessageController = class MessageController {
    constructor(message) {
        this.message = message;
    }
    getMessage(params) {
        return this.message.getMessage(params.id);
    }
    getMessages() {
        return this.message.getMessages();
    }
    createMessage(newChat) {
        return this.message.createMessage(newChat);
    }
};
__decorate([
    common_1.UseGuards(customGuard_guard_1.JwtCustomGuard, isOwner_guard_1.IsOwner),
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getMessage", null);
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "getMessages", null);
__decorate([
    common_1.UseGuards(customGuard_guard_1.JwtCustomGuard, isOwner_guard_1.IsOwner),
    common_1.Post('/'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "createMessage", null);
MessageController = __decorate([
    common_1.Controller('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map