import { Repository } from 'typeorm';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
import { UserEntity } from '../../domain/user-domain/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<UserEntity>, jwtService: JwtService);
    login(user: LoginDto): Promise<false | {
        foundLogin: UserEntity;
        access_token: string;
    }>;
}
