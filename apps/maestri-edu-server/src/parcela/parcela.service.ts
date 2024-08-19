import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParcelaServiceBase } from "./base/parcela.service.base";

@Injectable()
export class ParcelaService extends ParcelaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
