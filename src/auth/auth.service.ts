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
    // Procurar o usuário com o email fornecido
    const user = await this.usersService.findOne(loginDto.email);
    
    // Se o usuário não existir, lançar uma exceção
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    // Se a senha do usuário não estiver definida ou for inválida
    if (!user.password) {
      throw new UnauthorizedException('Senha inválida');
    }

    // Comparar a senha fornecida com a senha hashada do usuário
    const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password);
    
    // Se a senha não for válida, lançar uma exceção
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha inválida');
    }

    // Se tudo estiver correto, gerar o token JWT
    const payload = { sub: user.id, email: user.email };

    // Retornar o token de acesso
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
