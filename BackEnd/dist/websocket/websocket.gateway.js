"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
let WebsocketGateway = class WebsocketGateway {
    message(message, userId) {
        this.server.emit('events', { message, userId });
    }
    sendTransaction(date, userId, bookId) {
        this.server.emit('events', { date, userId, bookId });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], WebsocketGateway.prototype, "server", void 0);
WebsocketGateway = __decorate([
    websockets_1.WebSocketGateway()
], WebsocketGateway);
exports.WebsocketGateway = WebsocketGateway;
//# sourceMappingURL=websocket.gateway.js.map