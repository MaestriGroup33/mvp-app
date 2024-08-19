import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnderecoService } from "./endereco.service";
import { EnderecoControllerBase } from "./base/endereco.controller.base";

@swagger.ApiTags("enderecos")
@common.Controller("enderecos")
export class EnderecoController extends EnderecoControllerBase {
  constructor(protected readonly service: EnderecoService) {
    super(service);
  }
}
