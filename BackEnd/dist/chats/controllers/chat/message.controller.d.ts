import { MessagesService } from 'src/chats/services/chat/messages.service';
export declare class MessageController {
    private readonly message;
    constructor(message: MessagesService);
    getMessage(params: any): Promise<import("../../domain/chat-domain/messages.entity").MessagesEntity[]>;
    getMessages(): Promise<import("../../domain/chat-domain/messages.entity").MessagesEntity[]>;
    createMessage(newChat: any): Promise<any>;
}
