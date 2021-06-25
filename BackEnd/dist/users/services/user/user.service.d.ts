import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/user-domain/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    getUser(_id: number): Promise<UserEntity[]>;
    isEmailAvailable(email: string): Promise<boolean>;
    updateUser(_id: number, user: UserEntity): Promise<{
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
        thumb: String;
        givenrates: Number;
        totalrates: Number;
        books: import("../../../books/domain/book-domain/book.entity").BookEntity[];
        chats: import("../../../chats/domain/chat-domain/chat.entity").ChatEntity[];
        transactions: import("../../../chats/domain/transaction-domain/transaction.entity").TransactionEntity[];
        receivedTransactions: import("../../../chats/domain/transaction-domain/transaction.entity").TransactionEntity[];
    } & UserEntity>;
    deleteUser(id: string): Promise<void>;
    createUser(newUser: any): Promise<any>;
}
