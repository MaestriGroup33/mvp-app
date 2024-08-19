import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankingServiceBase } from "./base/banking.service.base";

@Injectable()
export class BankingService extends BankingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
