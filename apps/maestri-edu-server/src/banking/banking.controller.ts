import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankingService } from "./banking.service";
import { BankingControllerBase } from "./base/banking.controller.base";

@swagger.ApiTags("bankings")
@common.Controller("bankings")
export class BankingController extends BankingControllerBase {
  constructor(protected readonly service: BankingService) {
    super(service);
  }
}
