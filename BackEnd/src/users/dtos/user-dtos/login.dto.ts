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
    example: '61ce9af81b15f87ac5f99acea801d585',
    description: 'Hashed customer password'
  })
  @IsNotEmpty()
  pass: string;
}
