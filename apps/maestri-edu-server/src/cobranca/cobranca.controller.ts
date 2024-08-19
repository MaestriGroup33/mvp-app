import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CobrancaService } from "./cobranca.service";
import { CobrancaControllerBase } from "./base/cobranca.controller.base";

@swagger.ApiTags("cobrancas")
@common.Controller("cobrancas")
export class CobrancaController extends CobrancaControllerBase {
  constructor(protected readonly service: CobrancaService) {
    super(service);
  }
}
