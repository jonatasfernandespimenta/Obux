import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessagesEntity } from 'src/chats/domain/chat-domain/messages.entity';
import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';

@Injectable()
export class MessagesService { 
  constructor(@InjectRepository(MessagesEntity) private msgRepository: Repository<MessagesEntity>) {  }

  async getMessages() {
    return await this.msgRepository.find();
  };

  async getMessage(_id: number) {
    return await this.msgRepository.find({
      where: [{ "id": _id }]
    })
  };

  async createMessage(newChat) {
    return await this.msgRepository.save(newChat);
  }

}
