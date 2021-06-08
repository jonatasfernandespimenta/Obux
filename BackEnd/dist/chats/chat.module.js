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
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../users/guards/jwt.strategy");
const customGuard_guard_1 = require("../users/guards/customGuard.guard");
const roles_guard_1 = require("../users/guards/roles.guard");
const messages_service_1 = require("./services/chat/messages.service");
const messages_entity_1 = require("./domain/chat-domain/messages.entity");
const message_controller_1 = require("./controllers/chat/message.controller");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([chat_entity_1.ChatEntity, transaction_entity_1.TransactionEntity, messages_entity_1.MessagesEntity]),
            jwt_1.JwtModule.register({
                secret: `${process.env.SECRET_KEY}`, signOptions: {
                    expiresIn: '600m',
                },
            }),
        ],
        providers: [chat_service_1.ChatService, transactions_service_1.TransactionService, jwt_strategy_1.JwtStrategy, customGuard_guard_1.JwtCustomGuard, roles_guard_1.JwtRoleGuard, messages_service_1.MessagesService],
        controllers: [transactions_controller_1.TransactionController, chat_controller_1.ChatController, message_controller_1.MessageController],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map