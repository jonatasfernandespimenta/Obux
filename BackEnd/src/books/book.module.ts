import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookService } from './services/book/book.service';
import { BookController } from './controllers/books/book.controller';
import { BookEntity } from './domain/book-domain/book.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/users/guards/jwt.strategy';
import { JwtCustomGuard } from 'src/users/guards/customGuard.guard';
import { JwtRoleGuard } from 'src/users/guards/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity]),
    JwtModule.register(
      {
        secret: `${process.env.SECRET_KEY}`, signOptions: {
          expiresIn: '600m',
        },
      }
    ),
  ],
  providers: [BookService, JwtStrategy, JwtCustomGuard, JwtRoleGuard],
  controllers: [BookController],
})
export class BookModule { }
