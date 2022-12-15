import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
}
