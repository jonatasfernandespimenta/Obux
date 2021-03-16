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
    userLogin(userCredentials: LoginDto): Promise<false | {
        foundLogin: import("../../domain/user-domain/user.entity").UserEntity;
        access_token: string;
    }>;
    isAvailable(email: any): Promise<boolean>;
    updateUser(params: any, user: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nome: string;
        dataNasc: Date;
        telefone: number;
        email: String;
        cpf: string;
        senha: string;
        cidade: String;
        estado: String;
        description: String;
        file: String;
        givenrates: Number;
        totalrates: Number;
        books: import("../../../books/domain/book-domain/book.entity").BookEntity[];
        chats: import("../../../chats/domain/chat-domain/chat.entity").ChatEntity[];
        transactions: import("../../../chats/domain/transaction-domain/transaction.entity").TransactionEntity[];
        receivedTransactions: import("../../../chats/domain/transaction-domain/transaction.entity").TransactionEntity[];
    } & import("../../domain/user-domain/user.entity").UserEntity>;
    delUser(params: any): Promise<void>;
}
