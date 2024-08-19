import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnderecoServiceBase } from "./base/endereco.service.base";

@Injectable()
export class EnderecoService extends EnderecoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
