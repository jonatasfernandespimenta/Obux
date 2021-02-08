import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';
export declare class ChatService {
    private chatRepository;
    constructor(chatRepository: Repository<ChatEntity>);
    getChats(): Promise<ChatEntity[]>;
    getChat(_id: number): Promise<ChatEntity[]>;
    createChat(newChat: any): Promise<any>;
}
