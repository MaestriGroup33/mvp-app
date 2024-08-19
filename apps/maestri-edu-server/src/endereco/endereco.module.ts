import { Module } from "@nestjs/common";
import { EnderecoModuleBase } from "./base/endereco.module.base";
import { EnderecoService } from "./endereco.service";
import { EnderecoController } from "./endereco.controller";
import { EnderecoResolver } from "./endereco.resolver";

@Module({
  imports: [EnderecoModuleBase],
  controllers: [EnderecoController],
  providers: [EnderecoService, EnderecoResolver],
  exports: [EnderecoService],
})
export class EnderecoModule {}
