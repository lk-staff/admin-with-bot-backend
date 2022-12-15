import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getTypeOrmConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => ({
  type: 'sqlite',
  database: configService.get<string>('DATABASE_DATABASE'),
  autoLoadEntities: true,
  synchronize: true,
});
