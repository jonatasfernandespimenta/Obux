import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from 'src/chats/services/chat/chat.service';

@Controller('chats')
export class ChatController {
  constructor(
    private readonly chat: ChatService,
  ) {  }

  @Get(':id')
  getChat(@Param() params) {
    return this.chat.getChat(params.id);
  }

  @Get('/')
  getChats() {
    return this.chat.getChats();
  }

  @Post('create')
  createChat(@Body() newChat) {
    return this.chat.createChat(newChat);
  }
}
