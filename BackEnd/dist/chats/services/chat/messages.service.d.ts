import { MessagesEntity } from 'src/chats/domain/chat-domain/messages.entity';
import { Repository } from 'typeorm';
export declare class MessagesService {
    private msgRepository;
    constructor(msgRepository: Repository<MessagesEntity>);
    getMessages(): Promise<MessagesEntity[]>;
    getMessage(_id: number): Promise<MessagesEntity[]>;
    createMessage(newChat: any): Promise<any>;
}
