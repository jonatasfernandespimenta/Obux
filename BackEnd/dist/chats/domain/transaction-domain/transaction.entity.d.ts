import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { BaseEntity } from 'typeorm';
import { BookEntity } from 'src/books/domain/book-domain/book.entity';
export declare class TransactionEntity extends BaseEntity {
    id: number;
    due: Date;
    user: UserEntity[];
    receiver: UserEntity[];
    book: BookEntity[];
    accepted: Boolean;
}
