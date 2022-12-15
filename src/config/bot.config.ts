import { TelegrafModuleOptions } from 'nestjs-telegraf';
import { session } from 'telegraf';
import { ConfigService } from '@nestjs/config';

export const getBotConfig = async (
  configService: ConfigService,
): Promise<TelegrafModuleOptions> => ({
  token: configService.get<string>('BOT_TOKEN'),
  middlewares: [session()],
});
