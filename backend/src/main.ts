import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*', // Permitir todas las solicitudes de cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  };
  app.enableCors(corsOptions);

  const validationPipeOptions: ValidationPipeOptions = {
    transform: true, // Transformar el cuerpo de la solicitud a objetos
    whitelist: true, // Solo permitir propiedades decoradas en las clases DTO
    forbidNonWhitelisted: true, // Rechazar solicitudes con propiedades no permitidas
  };
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  await app.listen(3000);
  console.log('La aplicación se ha iniciado correctamente.');
}
bootstrap();
