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
exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderDto {
}
__decorate([
    swagger_1.ApiProperty({
        example: 'PXL-TL-PRETO',
        description: 'Product SKU'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], OrderDto.prototype, "sku", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 2,
        description: 'Product quantity'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], OrderDto.prototype, "qtd", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 10.00,
        description: 'Product base price. If the base price is 5 for example, then the total prive should be base price * quantity + shipping price'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], OrderDto.prototype, "base_price", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 5,
        description: 'Product shippinh price'
    }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], OrderDto.prototype, "shipping_price", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 25,
        description: 'The total of the product price: base_price * qtd + shipping_price'
    }),
    __metadata("design:type", Number)
], OrderDto.prototype, "total_price", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=item.dto.js.map