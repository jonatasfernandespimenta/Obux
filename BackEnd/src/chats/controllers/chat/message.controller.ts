import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ChatService } from 'src/chats/services/chat/chat.service';
import { MessagesService } from 'src/chats/services/chat/messages.service';
import { JwtCustomGuard } from 'src/users/guards/customGuard.guard';
import { IsOwner } from 'src/users/guards/isOwner.guard';

@Controller('messages')
export class MessageController {
  constructor(
    private readonly message: MessagesService,
  ) {  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Get(':id')
  getMessage(@Param() params) {
    return this.message.getMessage(params.id);
  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Get('/')
  getMessages() {
    return this.message.getMessages();
  }

  @UseGuards(JwtCustomGuard, IsOwner)
  @Post('/')
  createMessage(@Body() newChat) {
    return this.message.createMessage(newChat);
  }
}
