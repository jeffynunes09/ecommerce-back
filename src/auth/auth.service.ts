import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/loginDto';
import * as bcryptjs from 'bcryptjs';  // Importando bcrypt para verificar a senha

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
   
    const user = await this.usersService.findOne(loginDto.email);
    
    
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    
    if (!user.password) {
      throw new UnauthorizedException('Senha inválida');
    }

    
    const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password);
    
   
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida');
    }

   
    const payload = { sub: user.id, email: user.email };

    
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
