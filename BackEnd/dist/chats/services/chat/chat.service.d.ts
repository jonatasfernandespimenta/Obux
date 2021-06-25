import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';
export declare class ChatService {
    private chatRepository;
    private usersRepository;
    constructor(chatRepository: Repository<ChatEntity>, usersRepository: Repository<UserEntity>);
    getChats(): Promise<ChatEntity[]>;
    getChat(_id: number): Promise<ChatEntity[]>;
    createChat(newChat: any): Promise<any>;
}
