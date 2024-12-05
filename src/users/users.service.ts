import { Injectable, InternalServerErrorException, NotFoundException, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createUsersDto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs';
import { UserResponseDto } from './dto/userResponseDto';
import { plainToInstance } from 'class-transformer'; // Importando o método para transformar a entidade em DTO
import { UpdatedUserDto } from './dto/updatedUserDto';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {

      const hashPassword = await bcryptjs.hash(createUserDto.password, 10);


      const newUser = this.userRepository.create({
        ...createUserDto,
        password: hashPassword,
      });


      await this.userRepository.save(newUser);


      const userResponseDto = plainToInstance(UserResponseDto, newUser, {
        excludeExtraneousValues: true,
      });

      return userResponseDto;
    } catch (error) {
      console.log(createUserDto);
      console.log(`Erro ao criar usuário: ${error.message}`);
      throw new InternalServerErrorException(
        `Erro ao criar usuário: ${error.message}`,
      );
    }
  }

  async findOne(email: string): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne({ where: { email } });

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuário');
    }

  }

  async findAll() {
    try {

      const users = await this.userRepository.find()
      const userResponseDto = plainToInstance(UserResponseDto, users, {
        excludeExtraneousValues: true,
      });
      return userResponseDto

    } catch (error) {

      console.log(`Erro ao procurar usuários : ${error.message}`)
      throw new InternalServerErrorException(`Erro ao procurar usuários : ${error.message}`)
    }
  }

  async findById(id: UUID) : Promise<User> {
    
    
      const user = await this.userRepository.findOne({
        where: { id }
      })
      if(!user){
       
        throw new NotFoundException(`Usuário : ${user.name} não encontrado !`)

      }
      return user
    
      
    }

   
  
    async update(id: UUID, updatedUserDto: UpdatedUserDto): Promise<User> {
      try {
        // Encontra o usuário
        const user = await this.findById(id);
        
        // Mescla os dados recebidos do DTO com o usuário encontrado
        this.userRepository.merge(user, updatedUserDto);
  
        // Salva as alterações no banco de dados
        const updatedUser = await this.userRepository.save(user);
        
        return updatedUser;
  
      } catch (error) {
        console.log(`Erro ao atualizar usuário: ${error.message}`);
        throw new InternalServerErrorException(`Erro ao atualizar usuário: ${error.message}`);
      }
    }
  



  async delete (id:UUID) {

    try {
      
      const user = await this.userRepository.delete(id)

      return {
        message : `Usuário  foi excluido com sucesso!`
      }

    } catch (error) {
      
      console.log(`Erro ao exluir usuário : ${error.message}`)
      throw new InternalServerErrorException(`Erro ao excluir usuário : ${error.message}`)
    }
  }
}
