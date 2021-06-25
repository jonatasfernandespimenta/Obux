import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/domain/user-domain/user.entity';
import { Repository } from 'typeorm';
import { ChatEntity } from '../../domain/chat-domain/chat.entity';

@Injectable()
export class ChatService { 
  constructor(
    @InjectRepository(ChatEntity) private chatRepository: Repository<ChatEntity>,
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>
  ) {  }

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
    const res = await this.chatRepository.save(newChat);
    await this.usersRepository.update(newChat.chattingWith, { chats: [{ id: res.id }] });
    return res;
  }

}
