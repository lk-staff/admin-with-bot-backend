import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Flow')
export class FlowEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shcema: string;
}
