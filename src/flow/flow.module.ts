import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlowService } from './flow.service';
import { FlowController } from './flow.controller';
import { FlowEntity } from './entities/flow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlowEntity])],
  controllers: [FlowController],
  providers: [FlowService],
  exports: [TypeOrmModule],
})
export class FlowModule {}
