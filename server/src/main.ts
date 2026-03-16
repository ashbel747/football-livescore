import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
    ],
  });                                     

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap().catch(error => {
  Logger.error('Application failed to start', error);
  process.exit(1);
});                       
