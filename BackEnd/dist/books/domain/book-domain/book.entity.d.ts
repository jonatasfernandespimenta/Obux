import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';
import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { BaseEntity } from 'typeorm';
export declare class BookEntity extends BaseEntity {
    id: number;
    titulo: String;
    editora: String;
    autor: String;
    ano: String;
    genero: String;
    qualidade: String;
    disponibilidade: Number;
    sinopse: String;
    foto: String;
    user: UserEntity;
    transaction: TransactionEntity;
}
