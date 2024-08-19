import { Module } from "@nestjs/common";
import { ClassificacaoModuleBase } from "./base/classificacao.module.base";
import { ClassificacaoService } from "./classificacao.service";
import { ClassificacaoController } from "./classificacao.controller";
import { ClassificacaoResolver } from "./classificacao.resolver";

@Module({
  imports: [ClassificacaoModuleBase],
  controllers: [ClassificacaoController],
  providers: [ClassificacaoService, ClassificacaoResolver],
  exports: [ClassificacaoService],
})
export class ClassificacaoModule {}
