import { BaseEntity } from 'typeorm';
import { ChatEntity } from './chat.entity';
export declare class MessagesEntity extends BaseEntity {
    id: number;
    text: string;
    chatId: ChatEntity;
}
