import { Context } from 'telegraf';
export declare class BotUpdate {
    start(ctx: Context): Promise<void>;
    help(ctx: Context): Promise<void>;
    on(ctx: Context): Promise<void>;
    hears(ctx: Context): Promise<void>;
}
