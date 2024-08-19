import * as graphql from "@nestjs/graphql";
import { ParcelaResolverBase } from "./base/parcela.resolver.base";
import { Parcela } from "./base/Parcela";
import { ParcelaService } from "./parcela.service";

@graphql.Resolver(() => Parcela)
export class ParcelaResolver extends ParcelaResolverBase {
  constructor(protected readonly service: ParcelaService) {
    super(service);
  }
}
