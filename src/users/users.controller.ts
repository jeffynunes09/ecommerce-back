import { Body, Controller, Delete, Get, HttpStatus, InternalServerErrorException, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUsersDto';
import { UserResponseDto } from './dto/userResponseDto';
import { UpdatedUserDto } from './dto/updatedUserDto';
import { UUID } from 'crypto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 @Post() 
 async create (@Body() createUserdto:CreateUserDto, @Res() res:Response){

  try {
  
    const newUser = await this.usersService.create(createUserdto);
    
    return  res.status(HttpStatus.CREATED).json(newUser);
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao criar usuário',
      error: error.message,
    });
  }

 
 }

 @Get()
 async findAll (@Res() res:Response) {

    try {
      const users = await this.usersService.findAll()
      return res.status(HttpStatus.FOUND).json(users)
  
    } catch (error) {

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message:"Erro ao encontar usuários!",
        error: error.message
      })
      
    
    }

 }


 @Put(":id")
 async update(@Param("id") id: UUID, @Body() updatedUserDto: UpdatedUserDto, @Res() res:Response) {
   try {
     const user = await this.usersService.update(id, updatedUserDto);
     return res.status(HttpStatus.GONE).json(user)
   } catch (error) {
    
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({

      message: `Erro ao editar usuário ${updatedUserDto.name}`,
      error:error.message
    })

   }
 }


@Delete(":id")
async delete (@Param("id") id:UUID, @Res() res:Response){

  try {
    const user = await this.usersService.delete(id)

    return res.status(HttpStatus.GONE).json({
      message: `Usuário excluido com sucesso`
    })
  } catch (error) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({

      message: `Erro ao excluir usuário`,
      error:error.message
    })
    
  }

}



}
