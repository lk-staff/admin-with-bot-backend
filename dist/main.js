"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const bot = app.get((0, nestjs_telegraf_1.getBotToken)());
    app.enableCors();
    app.setGlobalPrefix('api');
    app.use(bot.webhookCallback('/secret-path'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map