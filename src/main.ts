import { NestFactory } from '@nestjs/core';
import { getBotToken } from 'nestjs-telegraf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const bot = app.get(getBotToken());
  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(bot.webhookCallback('/secret-path'));
  await app.listen(3000);
}
bootstrap();
