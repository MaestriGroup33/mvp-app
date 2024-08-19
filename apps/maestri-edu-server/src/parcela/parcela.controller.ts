import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParcelaService } from "./parcela.service";
import { ParcelaControllerBase } from "./base/parcela.controller.base";

@swagger.ApiTags("parcelas")
@common.Controller("parcelas")
export class ParcelaController extends ParcelaControllerBase {
  constructor(protected readonly service: ParcelaService) {
    super(service);
  }
}
