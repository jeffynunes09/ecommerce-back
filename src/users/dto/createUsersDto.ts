import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O e-mail não pode ser vazio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode ser vazia' })
  password: string;
}
