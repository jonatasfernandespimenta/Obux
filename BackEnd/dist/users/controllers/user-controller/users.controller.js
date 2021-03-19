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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../services/user/user.service");
const auth_service_1 = require("../../services/auth/auth.service");
const createuser_dto_1 = require("../../dtos/user-dtos/createuser.dto");
const login_dto_1 = require("../../dtos/user-dtos/login.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const customGuard_guard_1 = require("../../guards/customGuard.guard");
const isOwner_guard_1 = require("../../guards/isOwner.guard");
let UsersController = class UsersController {
    constructor(user, auth) {
        this.user = user;
        this.auth = auth;
    }
    getUser(params) {
        return this.user.getUser(params.id);
    }
    getUsers() {
        return this.user.getUsers();
    }
    uploadSingle(file) {
        console.log('ARQUIVO: ', file);
        return file;
    }
    createUser(newUser) {
        return this.user.createUser(newUser);
    }
    async userLogin(userCredentials) {
        return this.auth.login(userCredentials);
    }
    async isAvailable(email) {
        return this.user.isEmailAvailable(email);
    }
    updateUser(params, user) {
        return this.user.updateUser(params.id, user);
    }
    delUser(params) {
        return this.user.deleteUser(params.id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                cb(null, `${randomName}${path_1.extname(file.originalname)}.jpg`);
            }
        })
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "uploadSingle", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createuser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "userLogin", null);
__decorate([
    common_1.Post('isemailavailable'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "isAvailable", null);
__decorate([
    common_1.UseGuards(customGuard_guard_1.JwtCustomGuard, isOwner_guard_1.IsOwner),
    common_1.Put('update/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.UseGuards(customGuard_guard_1.JwtCustomGuard, isOwner_guard_1.IsOwner),
    common_1.Delete('deluser/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map