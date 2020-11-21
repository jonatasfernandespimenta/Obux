import { ChatService } from 'src/chats/services/chat/chat.service';
export declare class ChatController {
    private readonly chat;
    constructor(chat: ChatService);
    getChat(params: any): Promise<import("../../domain/chat-domain/chat.entity").ChatEntity[]>;
    getChats(): Promise<import("../../domain/chat-domain/chat.entity").ChatEntity[]>;
    createChat(newChat: any): Promise<any>;
}
