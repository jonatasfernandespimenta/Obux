import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/user-domain/user.entity';
import { CreateUserDto } from '../../dtos/user-dtos/createuser.dto';
import * as bcrypt from 'bcrypt'
import CPF, { validate } from 'cpf-check';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {  }

  async getUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<UserEntity[]> {
    return await this.usersRepository.find({
      where: [{ "id": _id }]
    });
  }

  async isEmailAvailable(email: string) {
    const available = await this.usersRepository.findOne(email);

    if(available) {
      return false;
    } else {
      return true;
    }

  }

  async updateUser(_id: number, user: UserEntity) {
    const userFound = await this.usersRepository.find({
      where: [{ "id": _id }]
    });

    if(userFound) {
      return await this.usersRepository.save(user);
    }
    return new BadRequestException('User not found!');
  }

  async deleteUser(id: string): Promise<void> {
    this.usersRepository.delete(id);
  }

  async createUser(newUser: CreateUserDto) {
    
    const userList = await this.usersRepository.find();
    
    const existingUser = userList.find(x => x.email === newUser.email) || userList.find(x => x.cpf === newUser.cpf);
    
    if (existingUser) {
      throw new BadRequestException('User already exists!');
    }

    if(validate(newUser.cpf)) {
      const salt = bcrypt.genSaltSync(10);
      const encyptedPassword = bcrypt.hashSync(newUser.senha, salt);
      
      newUser.senha = encyptedPassword;
  
      return await this.usersRepository.save(newUser);
    }

    return new BadRequestException('Invalid CPF!');

  }

}
