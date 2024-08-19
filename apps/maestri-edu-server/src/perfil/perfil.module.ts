import { Module } from "@nestjs/common";
import { PerfilModuleBase } from "./base/perfil.module.base";
import { PerfilService } from "./perfil.service";
import { PerfilController } from "./perfil.controller";
import { PerfilResolver } from "./perfil.resolver";

@Module({
  imports: [PerfilModuleBase],
  controllers: [PerfilController],
  providers: [PerfilService, PerfilResolver],
  exports: [PerfilService],
})
export class PerfilModule {}
