import * as graphql from "@nestjs/graphql";
import { DadosEscolaresResolverBase } from "./base/dadosEscolares.resolver.base";
import { DadosEscolares } from "./base/DadosEscolares";
import { DadosEscolaresService } from "./dadosEscolares.service";

@graphql.Resolver(() => DadosEscolares)
export class DadosEscolaresResolver extends DadosEscolaresResolverBase {
  constructor(protected readonly service: DadosEscolaresService) {
    super(service);
  }
}
