import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { getBotConfig } from 'src/config/bot.config';
import { BotUpdate } from './bot.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getBotConfig,
    }),
  ],
  controllers: [BotController],
  providers: [BotService, BotUpdate],
})
export class BotModule {}
