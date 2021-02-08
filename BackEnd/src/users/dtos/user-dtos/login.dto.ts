import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'Customer email'
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Hashed customer password'
  })
  @IsNotEmpty()
  senha: string;
}
