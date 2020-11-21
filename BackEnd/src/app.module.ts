import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { BookModule } from './books/book.module';
import { ChatModule } from './chats/chat.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import AdminBro from 'admin-bro';
import { AdminModule } from '@admin-bro/nestjs';
import { Database, Resource } from '@admin-bro/typeorm'

import { UserEntity } from './users/domain/user-domain/user.entity';
import { BookEntity } from './books/domain/book-domain/book.entity';
import { ChatEntity } from './chats/domain/chat-domain/chat.entity';
import { TransactionEntity } from './chats/domain/transaction-domain/transaction.entity';

AdminBro.registerAdapter({ Database, Resource })

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    BookModule,
    ChatModule,
  ],
})

// AdminModule.createAdmin({
//   adminBroOptions: {
//      rootPath: '/admin',
//      resources: [UserEntity, BookEntity, ChatEntity, TransactionEntity],
//   }
// }),

export class AppModule {}
