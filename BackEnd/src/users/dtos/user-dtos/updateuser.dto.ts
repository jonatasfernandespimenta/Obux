import { IsNotEmpty } from "class-validator";

export class UpdateUserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  pass: string;
}
