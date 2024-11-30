import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Isso já importa o repositório do User
  controllers: [UsersController],
  providers: [UsersService], // Não precisa adicionar Repository aqui
})
export class UsersModule {}
