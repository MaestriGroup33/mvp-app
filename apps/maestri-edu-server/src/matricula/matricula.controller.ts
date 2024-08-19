import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MatriculaService } from "./matricula.service";
import { MatriculaControllerBase } from "./base/matricula.controller.base";

@swagger.ApiTags("matriculas")
@common.Controller("matriculas")
export class MatriculaController extends MatriculaControllerBase {
  constructor(protected readonly service: MatriculaService) {
    super(service);
  }
}
