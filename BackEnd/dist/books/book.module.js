"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_service_1 = require("./services/book/book.service");
const book_controller_1 = require("./controllers/books/book.controller");
const book_entity_1 = require("./domain/book-domain/book.entity");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../users/guards/jwt.strategy");
const customGuard_guard_1 = require("../users/guards/customGuard.guard");
const roles_guard_1 = require("../users/guards/roles.guard");
let BookModule = class BookModule {
};
BookModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([book_entity_1.BookEntity]),
            jwt_1.JwtModule.register({
                secret: `${process.env.SECRET_KEY}`, signOptions: {
                    expiresIn: '600m',
                },
            }),
        ],
        providers: [book_service_1.BookService, jwt_strategy_1.JwtStrategy, customGuard_guard_1.JwtCustomGuard, roles_guard_1.JwtRoleGuard],
        controllers: [book_controller_1.BookController],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=book.module.js.map