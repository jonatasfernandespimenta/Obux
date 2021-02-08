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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../domain/user-domain/user.entity");
const bcrypt = require("bcrypt");
const cpf_check_1 = require("cpf-check");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers() {
        return await this.usersRepository.find();
    }
    async getUser(_id) {
        return await this.usersRepository.find({
            where: [{ "id": _id }]
        });
    }
    async isEmailAvailable(email) {
        const available = await this.usersRepository.findOne(email);
        if (available) {
            return false;
        }
        else {
            return true;
        }
    }
    async updateUser(_id, user) {
        const property = await this.usersRepository.findOne({
            where: { id: _id }
        });
        return this.usersRepository.save(Object.assign(Object.assign({}, property), user));
    }
    async deleteUser(id) {
        this.usersRepository.delete(id);
    }
    async createUser(newUser) {
        const existingUser = await this.usersRepository.findOne({
            where: [{
                    cpf: newUser.cpf
                },
                {
                    email: newUser.email
                }
            ]
        });
        if (existingUser) {
            throw new common_1.HttpException('User already exists!', common_1.HttpStatus.UNAUTHORIZED);
        }
        const fileName = `http://192.168.100.68:3000/files/${newUser.file}`;
        if (cpf_check_1.validate(newUser.cpf)) {
            const salt = bcrypt.genSaltSync(10);
            const encyptedPassword = bcrypt.hashSync(newUser.senha, salt);
            newUser.senha = encyptedPassword;
            newUser.file = fileName;
            return await this.usersRepository.save(newUser);
        }
        return new common_1.HttpException('Invalid CPF!', common_1.HttpStatus.UNAUTHORIZED);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map