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
    uploadSingle(file: any): any;
    createUser(newUser: CreateUserDto): Promise<(CreateUserDto & import("../../domain/user-domain/user.entity").UserEntity) | import("@nestjs/common").HttpException>;
    userLogin(userCredentials: LoginDto): Promise<false | import("../../domain/user-domain/user.entity").UserEntity>;
    isAvailable(email: any): Promise<boolean>;
    updateUser(params: any, user: any): Promise<import("../../domain/user-domain/user.entity").UserEntity | import("@nestjs/common").BadRequestException>;
    delUser(params: any): Promise<void>;
}
