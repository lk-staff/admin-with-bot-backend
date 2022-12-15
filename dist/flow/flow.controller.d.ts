import { FlowService } from './flow.service';
import { CreateFlowDto } from './dto/create-flow.dto';
import { UpdateFlowDto } from './dto/update-flow.dto';
export declare class FlowController {
    private readonly flowService;
    constructor(flowService: FlowService);
    create(createFlowDto: CreateFlowDto): import("./entities/flow.entity").FlowEntity;
    findAll(): Promise<import("./entities/flow.entity").FlowEntity[]>;
    update(id: string, updateFlowDto: UpdateFlowDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
