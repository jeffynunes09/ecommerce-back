import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createUsersDto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      // Cria uma nova instância da entidade User a partir do DTO
      const newUser = this.userRepository.create(createUserDto);

      // Persiste o novo usuário no banco de dados
      await this.userRepository.save(newUser);

      // Retorna o novo usuário após ser salvo
      return newUser;
    } catch (error) {
      console.log(createUserDto)
      console.log(`Erro ao criar usuário: ${error.message}`);
      throw new InternalServerErrorException(
        `Erro ao criar usuário: ${error.message}`,
      );
    }
  }
}
