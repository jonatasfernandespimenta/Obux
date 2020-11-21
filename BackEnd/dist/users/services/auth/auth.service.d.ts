import { Repository } from 'typeorm';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
import { UserEntity } from '../../domain/user-domain/user.entity';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    login(user: LoginDto): Promise<UserEntity>;
}
