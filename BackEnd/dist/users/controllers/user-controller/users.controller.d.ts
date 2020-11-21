import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { CreateUserDto } from '../../dtos/user-dtos/createuser.dto';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
export declare class UsersController {
    private readonly user;
    private readonly auth;
    constructor(user: UserService, auth: AuthService);
    getUser(params: any): Promise<import("../../domain/user-domain/user.entity").UserEntity[]>;
    getUsers(): Promise<import("../../domain/user-domain/user.entity").UserEntity[]>;
    uploadFile(file: any): void;
    createUser(newUser: CreateUserDto): Promise<import("@nestjs/common").BadRequestException | (CreateUserDto & import("../../domain/user-domain/user.entity").UserEntity)>;
    userLogin(userCredentials: LoginDto): Promise<import("../../domain/user-domain/user.entity").UserEntity>;
    isAvailable(email: any): Promise<boolean>;
    delUser(params: any): Promise<void>;
}
