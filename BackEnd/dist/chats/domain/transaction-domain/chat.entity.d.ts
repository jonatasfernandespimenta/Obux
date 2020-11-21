import { UserEntity } from '../../../users/domain/user-domain/user.entity';
import { BaseEntity } from 'typeorm';
export declare class ChatEntity extends BaseEntity {
    id: number;
    messages: String;
    user: UserEntity[];
}
