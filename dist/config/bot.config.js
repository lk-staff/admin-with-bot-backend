"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBotConfig = void 0;
const telegraf_1 = require("telegraf");
const getBotConfig = async (configService) => ({
    token: configService.get('BOT_TOKEN'),
    middlewares: [(0, telegraf_1.session)()],
});
exports.getBotConfig = getBotConfig;
//# sourceMappingURL=bot.config.js.map