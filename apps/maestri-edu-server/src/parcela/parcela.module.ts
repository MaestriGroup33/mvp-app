import { Module } from "@nestjs/common";
import { ParcelaModuleBase } from "./base/parcela.module.base";
import { ParcelaService } from "./parcela.service";
import { ParcelaController } from "./parcela.controller";
import { ParcelaResolver } from "./parcela.resolver";

@Module({
  imports: [ParcelaModuleBase],
  controllers: [ParcelaController],
  providers: [ParcelaService, ParcelaResolver],
  exports: [ParcelaService],
})
export class ParcelaModule {}
