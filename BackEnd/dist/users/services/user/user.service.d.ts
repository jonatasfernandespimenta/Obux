import { BadRequestException, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/user-domain/user.entity';
import { CreateUserDto } from '../../dtos/user-dtos/createuser.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    getUser(_id: number): Promise<UserEntity[]>;
    isEmailAvailable(email: string): Promise<boolean>;
    updateUser(_id: number, user: UserEntity): Promise<UserEntity | BadRequestException>;
    deleteUser(id: string): Promise<void>;
    createUser(newUser: CreateUserDto): Promise<HttpException | (CreateUserDto & UserEntity)>;
}
