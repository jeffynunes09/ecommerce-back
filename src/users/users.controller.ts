import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUsersDto';
import { UserResponseDto } from './dto/userResponseDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 @Post() 
 async create (@Body() createUserdto:CreateUserDto) : Promise<UserResponseDto>{

  try {
    const newUser = this.usersService.create(createUserdto)
    return newUser;
  } catch (error) {

    console.log(`Erro ao criar usuário : ${error.message}`)
    throw new InternalServerErrorException(`Erro ao criar usuário : ${error.message}`)
    
  }

 
 }

}
