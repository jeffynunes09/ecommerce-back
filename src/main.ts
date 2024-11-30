import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Para transformar os dados de entrada em instâncias da classe DTO
    whitelist: true, // Para remover propriedades não validadas
  }));
  await app.listen(3000);
}
bootstrap();
