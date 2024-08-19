import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassificacaoService } from "./classificacao.service";
import { ClassificacaoControllerBase } from "./base/classificacao.controller.base";

@swagger.ApiTags("classificacaos")
@common.Controller("classificacaos")
export class ClassificacaoController extends ClassificacaoControllerBase {
  constructor(protected readonly service: ClassificacaoService) {
    super(service);
  }
}
