"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flow_service_1 = require("./flow.service");
const flow_controller_1 = require("./flow.controller");
const flow_entity_1 = require("./entities/flow.entity");
let FlowModule = class FlowModule {
};
FlowModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([flow_entity_1.FlowEntity])],
        controllers: [flow_controller_1.FlowController],
        providers: [flow_service_1.FlowService],
        exports: [typeorm_1.TypeOrmModule],
    })
], FlowModule);
exports.FlowModule = FlowModule;
//# sourceMappingURL=flow.module.js.map