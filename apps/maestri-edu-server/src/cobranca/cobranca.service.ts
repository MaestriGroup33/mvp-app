import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CobrancaServiceBase } from "./base/cobranca.service.base";

@Injectable()
export class CobrancaService extends CobrancaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
