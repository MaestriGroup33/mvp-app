/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Documento as PrismaDocumento } from "@prisma/client";

export class DocumentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DocumentoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.documento.count(args);
  }

  async documentos(
    args: Prisma.DocumentoFindManyArgs
  ): Promise<PrismaDocumento[]> {
    return this.prisma.documento.findMany(args);
  }
  async documento(
    args: Prisma.DocumentoFindUniqueArgs
  ): Promise<PrismaDocumento | null> {
    return this.prisma.documento.findUnique(args);
  }
  async createDocumento(
    args: Prisma.DocumentoCreateArgs
  ): Promise<PrismaDocumento> {
    return this.prisma.documento.create(args);
  }
  async updateDocumento(
    args: Prisma.DocumentoUpdateArgs
  ): Promise<PrismaDocumento> {
    return this.prisma.documento.update(args);
  }
  async deleteDocumento(
    args: Prisma.DocumentoDeleteArgs
  ): Promise<PrismaDocumento> {
    return this.prisma.documento.delete(args);
  }
}
