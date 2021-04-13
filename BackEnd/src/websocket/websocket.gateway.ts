import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class WebsocketGateway {

  @WebSocketServer() server;

  message(message: string, userId: string) {
    this.server.emit('events', { message, userId });
  }

  sendTransaction(date: Date, userId: number, bookId: number) {
    this.server.emit('events', { date, userId, bookId });
  }

}
