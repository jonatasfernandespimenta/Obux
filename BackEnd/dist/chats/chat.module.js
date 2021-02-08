"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chat_service_1 = require("./services/chat/chat.service");
const chat_controller_1 = require("./controllers/chat/chat.controller");
const chat_entity_1 = require("./domain/chat-domain/chat.entity");
const transactions_service_1 = require("./services/transactions/transactions.service");
const transactions_controller_1 = require("./controllers/transactions/transactions.controller");
const transaction_entity_1 = require("./domain/transaction-domain/transaction.entity");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([chat_entity_1.ChatEntity, transaction_entity_1.TransactionEntity])],
        providers: [chat_service_1.ChatService, transactions_service_1.TransactionService],
        controllers: [transactions_controller_1.TransactionController, chat_controller_1.ChatController],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map