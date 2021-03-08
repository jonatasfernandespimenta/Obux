import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ChatService } from 'src/chats/services/chat/chat.service';
import { JwtCustomGuard } from 'src/users/guards/customGuard.guard';
import { IsOwner } from 'src/users/guards/isOwner.guard';

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

  @UseGuards(JwtCustomGuard, IsOwner)
  @Post('create')
  createChat(@Body() newChat) {
    return this.chat.createChat(newChat);
  }
}
