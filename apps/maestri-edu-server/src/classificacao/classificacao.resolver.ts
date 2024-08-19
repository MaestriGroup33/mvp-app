import * as graphql from "@nestjs/graphql";
import { ClassificacaoResolverBase } from "./base/classificacao.resolver.base";
import { Classificacao } from "./base/Classificacao";
import { ClassificacaoService } from "./classificacao.service";

@graphql.Resolver(() => Classificacao)
export class ClassificacaoResolver extends ClassificacaoResolverBase {
  constructor(protected readonly service: ClassificacaoService) {
    super(service);
  }
}
