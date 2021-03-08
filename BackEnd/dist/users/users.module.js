"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./services/user/user.service");
const users_controller_1 = require("./controllers/user-controller/users.controller");
const user_entity_1 = require("./domain/user-domain/user.entity");
const auth_service_1 = require("./services/auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./guards/jwt.strategy");
const customGuard_guard_1 = require("./guards/customGuard.guard");
const roles_guard_1 = require("./guards/roles.guard");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.register({
                secret: `${process.env.SECRET_KEY}`, signOptions: {
                    expiresIn: '600m',
                },
            }),
        ],
        providers: [user_service_1.UserService, auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, customGuard_guard_1.JwtCustomGuard, roles_guard_1.JwtRoleGuard],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map