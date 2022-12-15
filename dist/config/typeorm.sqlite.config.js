"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const getTypeOrmConfig = async (configService) => ({
    type: 'sqlite',
    database: configService.get('DATABASE_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
});
exports.getTypeOrmConfig = getTypeOrmConfig;
//# sourceMappingURL=typeorm.sqlite.config.js.map