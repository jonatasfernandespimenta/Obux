import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';
export declare class ChatService {
    private chatRepository;
    constructor(chatRepository: Repository<ChatEntity>);
    getChats(): Promise<any[]>;
    getChat(_id: number): Promise<any[]>;
    createChat(newChat: any): Promise<any>;
}
