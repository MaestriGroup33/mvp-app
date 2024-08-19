import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DadosEscolaresService } from "./dadosEscolares.service";
import { DadosEscolaresControllerBase } from "./base/dadosEscolares.controller.base";

@swagger.ApiTags("dadosEscolares")
@common.Controller("dadosEscolares")
export class DadosEscolaresController extends DadosEscolaresControllerBase {
  constructor(protected readonly service: DadosEscolaresService) {
    super(service);
  }
}
