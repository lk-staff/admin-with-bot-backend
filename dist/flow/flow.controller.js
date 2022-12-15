"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowController = void 0;
const common_1 = require("@nestjs/common");
const flow_service_1 = require("./flow.service");
const create_flow_dto_1 = require("./dto/create-flow.dto");
const update_flow_dto_1 = require("./dto/update-flow.dto");
let FlowController = class FlowController {
    constructor(flowService) {
        this.flowService = flowService;
    }
    create(createFlowDto) {
        return this.flowService.create(createFlowDto);
    }
    findAll() {
        return this.flowService.findAll();
    }
    update(id, updateFlowDto) {
        return this.flowService.update(+id, updateFlowDto);
    }
    remove(id) {
        return this.flowService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flow_dto_1.CreateFlowDto]),
    __metadata("design:returntype", void 0)
], FlowController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlowController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flow_dto_1.UpdateFlowDto]),
    __metadata("design:returntype", void 0)
], FlowController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowController.prototype, "remove", null);
FlowController = __decorate([
    (0, common_1.Controller)('flow'),
    __metadata("design:paramtypes", [flow_service_1.FlowService])
], FlowController);
exports.FlowController = FlowController;
//# sourceMappingURL=flow.controller.js.map