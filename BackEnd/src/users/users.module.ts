import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { UsersController } from './controllers/user-controller/users.controller';
import { UserEntity } from './domain/user-domain/user.entity';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, AuthService],
  controllers: [UsersController],
})

export class UsersModule { }
