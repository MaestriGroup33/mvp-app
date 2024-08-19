import { Module } from "@nestjs/common";
import { DadosEscolaresModuleBase } from "./base/dadosEscolares.module.base";
import { DadosEscolaresService } from "./dadosEscolares.service";
import { DadosEscolaresController } from "./dadosEscolares.controller";
import { DadosEscolaresResolver } from "./dadosEscolares.resolver";

@Module({
  imports: [DadosEscolaresModuleBase],
  controllers: [DadosEscolaresController],
  providers: [DadosEscolaresService, DadosEscolaresResolver],
  exports: [DadosEscolaresService],
})
export class DadosEscolaresModule {}
