import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlowEntity } from './entities/flow.entity';
import { CreateFlowDto } from './dto/create-flow.dto';
import { UpdateFlowDto } from './dto/update-flow.dto';

@Injectable()
export class FlowService {
  constructor(
    @InjectRepository(FlowEntity)
    private usersRepository: Repository<FlowEntity>,
  ) {}

  create(createFlowDto: CreateFlowDto) {
    return this.usersRepository.create(createFlowDto);
  }

  findAll(): Promise<FlowEntity[]> {
    return this.usersRepository.find();
  }

  update(id: number, updateFlowDto: UpdateFlowDto) {
    return this.usersRepository.update(id, updateFlowDto);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
