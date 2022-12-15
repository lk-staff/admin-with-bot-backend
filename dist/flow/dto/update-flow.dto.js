"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlowDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_flow_dto_1 = require("./create-flow.dto");
class UpdateFlowDto extends (0, mapped_types_1.PartialType)(create_flow_dto_1.CreateFlowDto) {
}
exports.UpdateFlowDto = UpdateFlowDto;
//# sourceMappingURL=update-flow.dto.js.map