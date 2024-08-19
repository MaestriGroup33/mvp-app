import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DadosEscolaresServiceBase } from "./base/dadosEscolares.service.base";

@Injectable()
export class DadosEscolaresService extends DadosEscolaresServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
