import * as graphql from "@nestjs/graphql";
import { EnderecoResolverBase } from "./base/endereco.resolver.base";
import { Endereco } from "./base/Endereco";
import { EnderecoService } from "./endereco.service";

@graphql.Resolver(() => Endereco)
export class EnderecoResolver extends EnderecoResolverBase {
  constructor(protected readonly service: EnderecoService) {
    super(service);
  }
}
