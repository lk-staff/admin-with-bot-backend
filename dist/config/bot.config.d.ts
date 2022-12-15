import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { ConfigService } from '@nestjs/config';
export declare const getBotConfig: (configService: ConfigService) => Promise<TelegrafModuleOptions>;
