import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controllers/chat/chat.controller';
import { ChatEntity } from './domain/chat-domain/chat.entity';

import { TransactionService } from './services/transactions/transactions.service';
import { TransactionController } from './controllers/transactions/transactions.controller';
import { TransactionEntity } from './domain/transaction-domain/transaction.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/users/guards/jwt.strategy';
import { JwtCustomGuard } from 'src/users/guards/customGuard.guard';
import { JwtRoleGuard } from 'src/users/guards/roles.guard';
import { MessagesService } from './services/chat/messages.service';
import { MessagesEntity } from './domain/chat-domain/messages.entity';
import { MessageController } from './controllers/chat/message.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity, TransactionEntity, MessagesEntity]),
    JwtModule.register(
      {
        secret: `${process.env.SECRET_KEY}`, signOptions: {
          expiresIn: '600m',
        },
      }
    ),
  ],
  providers: [ChatService, TransactionService, JwtStrategy, JwtCustomGuard, JwtRoleGuard, MessagesService],
  controllers: [TransactionController, ChatController, MessageController],
})
export class ChatModule { }
