import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.sqlite.config';
import { FlowModule } from './flow/flow.module';
import { UsersModule } from './users/users.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    FlowModule,
    UsersModule,
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
