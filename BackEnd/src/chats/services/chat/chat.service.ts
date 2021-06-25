import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';

@Injectable()
export class ChatService { 
  constructor(@InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>) {  }

  async getChats() {
    return await this.chatRepository.find();
  };

  async getChat(_id: number) {
    return await this.chatRepository.find({
      where: [{ "id": _id }]
    })
  };

  async createChat(newChat) {
    // Updates the other user chats adding this chat
    // example: User1 opens chat with User2
    // User1.chats = [{ id: 1 }]
    // Update User2 to add chat. Current User2.chats = []
    // After update -> User2.chats = [{ id: 1 }]

    return await this.chatRepository.save(newChat);
  }

}
