import { Module } from "@nestjs/common";
import { CobrancaModuleBase } from "./base/cobranca.module.base";
import { CobrancaService } from "./cobranca.service";
import { CobrancaController } from "./cobranca.controller";
import { CobrancaResolver } from "./cobranca.resolver";

@Module({
  imports: [CobrancaModuleBase],
  controllers: [CobrancaController],
  providers: [CobrancaService, CobrancaResolver],
  exports: [CobrancaService],
})
export class CobrancaModule {}
