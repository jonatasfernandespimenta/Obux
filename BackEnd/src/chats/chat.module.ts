import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controllers/chat/chat.controller';
import { ChatEntity } from './domain/chat-domain/chat.entity';

import { TransactionService } from './services/transactions/transactions.service';
import { TransactionController } from './controllers/transactions/transactions.controller';
import { TransactionEntity } from './domain/transaction-domain/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, TransactionEntity])],
  providers: [ChatService, TransactionService],
  controllers: [TransactionController, ChatController],
})
export class ChatModule { }
