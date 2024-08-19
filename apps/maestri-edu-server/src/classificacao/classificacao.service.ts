import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassificacaoServiceBase } from "./base/classificacao.service.base";

@Injectable()
export class ClassificacaoService extends ClassificacaoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
