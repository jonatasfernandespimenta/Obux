import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { BaseEntity } from 'typeorm';
export declare class TransactionEntity extends BaseEntity {
    id: number;
    due: Date;
    user: UserEntity[];
    receiver: UserEntity[];
}
