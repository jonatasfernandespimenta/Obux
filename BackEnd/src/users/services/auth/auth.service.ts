import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
import { UserEntity } from '../../domain/user-domain/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {  };

  async login(user: LoginDto) {
    const userList = await this.usersRepository.find();

    const foundLogin = userList.find(
      x => x.email === user.email && bcrypt.compareSync(user.senha, x.senha)
    );

    if(!foundLogin) {
      return false;
    }

    return foundLogin;

  }
}
