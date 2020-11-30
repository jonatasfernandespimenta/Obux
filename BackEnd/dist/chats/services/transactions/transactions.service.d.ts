import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<TransactionEntity>);
    getTransactions(): Promise<TransactionEntity[]>;
    getTransaction(_id: number): Promise<TransactionEntity[]>;
    createTransaction(newTransaction: any): Promise<any>;
    updateTransaction(_id: number, transaction: TransactionEntity): Promise<{
        id: number;
        due: Date;
        user: import("../../../users/domain/user-domain/user.entity").UserEntity[];
        receiver: import("../../../users/domain/user-domain/user.entity").UserEntity[];
        book: import("../../../books/domain/book-domain/book.entity").BookEntity[];
        accepted: Boolean;
    } & TransactionEntity>;
}
