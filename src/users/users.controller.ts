import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUsersDto';
import { UserResponseDto } from './dto/userResponseDto';
import { UpdatedUserDto } from './dto/updatedUserDto';
import { UUID } from 'crypto';

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

 @Get()
 async findAll () {

    try {
      const users = await this.usersService.findAll()
      return users;
  
    } catch (error) {
      
      console.log(`Erro ao procurar usuarios : ${error.message}`)
    }

 }


 @Put(":id")
 async update(@Param("id") id: UUID, @Body() updatedUserDto: UpdatedUserDto) {
   try {
     const user = await this.usersService.update(id, updatedUserDto);
     return user;
   } catch (error) {
     console.log(`Erro ao editar usuário: ${error.message}`);
     throw new InternalServerErrorException(`Erro ao editar usuário: ${error.message}`);
   }
 }


@Delete(":id")
async delete (@Param("id") id:UUID){

  try {
    const user = await this.usersService.delete(id)

    return {
      message : `Usuário excluido com sucesso!`
    }
  } catch (error) {
    console.log(`Erro ao excluir usuário : ${error.message}`)
    throw new InternalServerErrorException(`Erro ao excluir usuário : ${error.message}`)
    
  }

}



}
