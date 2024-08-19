import * as graphql from "@nestjs/graphql";
import { BankingResolverBase } from "./base/banking.resolver.base";
import { Banking } from "./base/Banking";
import { BankingService } from "./banking.service";

@graphql.Resolver(() => Banking)
export class BankingResolver extends BankingResolverBase {
  constructor(protected readonly service: BankingService) {
    super(service);
  }
}
