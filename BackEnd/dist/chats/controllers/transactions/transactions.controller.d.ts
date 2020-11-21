import { TransactionService } from 'src/chats/services/transactions/transactions.service';
export declare class TransactionController {
    private readonly transaction;
    constructor(transaction: TransactionService);
    getChat(params: any): Promise<import("../../domain/transaction-domain/transaction.entity").TransactionEntity[]>;
    getChats(): Promise<import("../../domain/transaction-domain/transaction.entity").TransactionEntity[]>;
    createChat(newTransaction: any): Promise<any>;
}
