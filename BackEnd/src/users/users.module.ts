import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { UsersController } from './controllers/user-controller/users.controller';
import { UserEntity } from './domain/user-domain/user.entity';
import { AuthService } from './services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guards/jwt.strategy';
import { JwtCustomGuard } from './guards/customGuard.guard';
import { JwtRoleGuard } from './guards/roles.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register(
      {
        secret: `${process.env.SECRET_KEY}`, signOptions: {
          expiresIn: '600m',
        },
      }
    ),
  ],
  providers: [UserService, AuthService, JwtStrategy, JwtCustomGuard, JwtRoleGuard],
  controllers: [UsersController],
})

export class UsersModule { }
