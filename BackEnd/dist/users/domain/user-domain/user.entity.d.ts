import { BaseEntity } from 'typeorm';
import { BookEntity } from 'src/books/domain/book-domain/book.entity';
import { ChatEntity } from 'src/chats/domain/chat-domain/chat.entity';
import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
export declare class UserEntity extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    nome: string;
    dataNasc: String;
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
    books: BookEntity[];
    chats: ChatEntity[];
    transactions: TransactionEntity[];
    receivedTransactions: TransactionEntity[];
}
