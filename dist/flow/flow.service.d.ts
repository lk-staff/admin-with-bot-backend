import { Repository } from 'typeorm';
import { FlowEntity } from './entities/flow.entity';
import { CreateFlowDto } from './dto/create-flow.dto';
import { UpdateFlowDto } from './dto/update-flow.dto';
export declare class FlowService {
    private usersRepository;
    constructor(usersRepository: Repository<FlowEntity>);
    create(createFlowDto: CreateFlowDto): FlowEntity;
    findAll(): Promise<FlowEntity[]>;
    update(id: number, updateFlowDto: UpdateFlowDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
