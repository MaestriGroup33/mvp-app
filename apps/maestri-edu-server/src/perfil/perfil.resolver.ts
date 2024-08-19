import * as graphql from "@nestjs/graphql";
import { PerfilResolverBase } from "./base/perfil.resolver.base";
import { Perfil } from "./base/Perfil";
import { PerfilService } from "./perfil.service";

@graphql.Resolver(() => Perfil)
export class PerfilResolver extends PerfilResolverBase {
  constructor(protected readonly service: PerfilService) {
    super(service);
  }
}
