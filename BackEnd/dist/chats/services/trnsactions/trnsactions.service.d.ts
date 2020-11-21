import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private chatRepository;
    constructor(chatRepository: Repository<TransactionEntity>);
    getChats(): Promise<TransactionEntity[]>;
    getChat(_id: number): Promise<TransactionEntity[]>;
    createChat(newChat: any): Promise<any>;
}
