import { Module } from "@nestjs/common";
import { MatriculaModuleBase } from "./base/matricula.module.base";
import { MatriculaService } from "./matricula.service";
import { MatriculaController } from "./matricula.controller";
import { MatriculaResolver } from "./matricula.resolver";

@Module({
  imports: [MatriculaModuleBase],
  controllers: [MatriculaController],
  providers: [MatriculaService, MatriculaResolver],
  exports: [MatriculaService],
})
export class MatriculaModule {}
