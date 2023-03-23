import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  await app.listen(3090);
}

bootstrap();
