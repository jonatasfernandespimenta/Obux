import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<TransactionEntity>);
    getTransactions(): Promise<TransactionEntity[]>;
    getTransaction(_id: number): Promise<TransactionEntity[]>;
    createTransaction(newChat: any): Promise<any>;
}
