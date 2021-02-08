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
    return await this.chatRepository.save(newChat);
  }

}
