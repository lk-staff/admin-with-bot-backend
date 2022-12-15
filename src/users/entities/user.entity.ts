import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('User')
export class UserEntity extends BaseEntity {
  @Column()
  id: number;

  @Column()
  is_bot: boolean;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  language_code: string;
}
