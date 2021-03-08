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
exports.IsOwner = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let IsOwner = class IsOwner {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        var _a, _b, _c;
        const req = context.switchToHttp().getRequest();
        const decodedToken = this.jwtService.decode(req.headers['access-token']);
        const userValidation = Number(req.user.id) === Number((_a = req.params) === null || _a === void 0 ? void 0 : _a.id);
        const orderValidation = Number(req.user.id) === Number((_b = req.body.user) === null || _b === void 0 ? void 0 : _b.id);
        const itemValidation = Number(req.user.id) === Number((_c = req.body) === null || _c === void 0 ? void 0 : _c.userId);
        if (decodedToken.admin) {
            return true;
        }
        if (userValidation) {
            return Number(req.user.id) === Number(req.params.id);
        }
        if (orderValidation) {
            return Number(req.user.id) === Number(req.body.user.id);
        }
        if (itemValidation) {
            return Number(req.user.id) === Number(req.body.userId);
        }
        else {
            throw new common_1.HttpException('Access denied', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
IsOwner = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], IsOwner);
exports.IsOwner = IsOwner;
//# sourceMappingURL=isOwner.guard.js.map