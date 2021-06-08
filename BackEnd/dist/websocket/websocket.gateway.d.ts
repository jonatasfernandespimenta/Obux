export declare class WebsocketGateway {
    server: any;
    message(message: string, userId: string): void;
    sendTransaction(date: Date, userId: number, bookId: number): void;
}
