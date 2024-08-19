import { Module } from "@nestjs/common";
import { BankingModuleBase } from "./base/banking.module.base";
import { BankingService } from "./banking.service";
import { BankingController } from "./banking.controller";
import { BankingResolver } from "./banking.resolver";

@Module({
  imports: [BankingModuleBase],
  controllers: [BankingController],
  providers: [BankingService, BankingResolver],
  exports: [BankingService],
})
export class BankingModule {}
