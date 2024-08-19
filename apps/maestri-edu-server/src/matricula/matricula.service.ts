import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatriculaServiceBase } from "./base/matricula.service.base";

@Injectable()
export class MatriculaService extends MatriculaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
