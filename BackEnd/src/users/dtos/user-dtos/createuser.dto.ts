import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  dataNasc: Date;

  @IsNotEmpty()
  telefone: number;

  @IsNotEmpty()
  email: String;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  cidade: String;

  @IsNotEmpty()
  estado: String;

}
