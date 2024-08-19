import * as graphql from "@nestjs/graphql";
import { MatriculaResolverBase } from "./base/matricula.resolver.base";
import { Matricula } from "./base/Matricula";
import { MatriculaService } from "./matricula.service";

@graphql.Resolver(() => Matricula)
export class MatriculaResolver extends MatriculaResolverBase {
  constructor(protected readonly service: MatriculaService) {
    super(service);
  }
}
