import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerfilService } from "./perfil.service";
import { PerfilControllerBase } from "./base/perfil.controller.base";

@swagger.ApiTags("perfils")
@common.Controller("perfils")
export class PerfilController extends PerfilControllerBase {
  constructor(protected readonly service: PerfilService) {
    super(service);
  }
}
