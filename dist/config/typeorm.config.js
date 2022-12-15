"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const getTypeOrmConfig = async (configService) => ({
    type: 'mysql',
    host: configService.get('DATABASE_HOST'),
    port: +configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
});
exports.getTypeOrmConfig = getTypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map