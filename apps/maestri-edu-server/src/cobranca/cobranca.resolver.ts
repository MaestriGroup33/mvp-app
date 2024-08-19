import * as graphql from "@nestjs/graphql";
import { CobrancaResolverBase } from "./base/cobranca.resolver.base";
import { Cobranca } from "./base/Cobranca";
import { CobrancaService } from "./cobranca.service";

@graphql.Resolver(() => Cobranca)
export class CobrancaResolver extends CobrancaResolverBase {
  constructor(protected readonly service: CobrancaService) {
    super(service);
  }
}
