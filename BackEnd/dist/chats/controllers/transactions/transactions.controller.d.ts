import { TransactionService } from 'src/chats/services/transactions/transactions.service';
export declare class TransactionController {
    private readonly transaction;
    constructor(transaction: TransactionService);
    getChat(params: any): Promise<import("../../domain/transaction-domain/transaction.entity").TransactionEntity[]>;
    getChats(): Promise<import("../../domain/transaction-domain/transaction.entity").TransactionEntity[]>;
    createChat(newTransaction: any): Promise<any>;
    updateBook(params: any, transaction: any): Promise<{
        id: number;
        due: Date;
        user: import("../../../users/domain/user-domain/user.entity").UserEntity[];
        receiver: import("../../../users/domain/user-domain/user.entity").UserEntity[];
        book: import("../../../books/domain/book-domain/book.entity").BookEntity[];
        accepted: Boolean;
    } & import("../../domain/transaction-domain/transaction.entity").TransactionEntity>;
}
