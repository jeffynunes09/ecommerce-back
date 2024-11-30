import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createUsersDto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from './dto/userResponseDto';
import { plainToInstance } from 'class-transformer'; // Importando o método para transformar a entidade em DTO

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
     
      const hashPassword = await bcrypt.hash(createUserDto.password, 10);

      
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
      console.log(user);  // Log para verificar se o usuário está sendo recuperado corretamente
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar usuário');
    }

}
}