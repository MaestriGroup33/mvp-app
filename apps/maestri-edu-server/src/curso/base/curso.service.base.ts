/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Curso as PrismaCurso,
  Matricula as PrismaMatricula,
} from "@prisma/client";

export class CursoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CursoCountArgs, "select">): Promise<number> {
    return this.prisma.curso.count(args);
  }

  async cursos(args: Prisma.CursoFindManyArgs): Promise<PrismaCurso[]> {
    return this.prisma.curso.findMany(args);
  }
  async curso(args: Prisma.CursoFindUniqueArgs): Promise<PrismaCurso | null> {
    return this.prisma.curso.findUnique(args);
  }
  async createCurso(args: Prisma.CursoCreateArgs): Promise<PrismaCurso> {
    return this.prisma.curso.create(args);
  }
  async updateCurso(args: Prisma.CursoUpdateArgs): Promise<PrismaCurso> {
    return this.prisma.curso.update(args);
  }
  async deleteCurso(args: Prisma.CursoDeleteArgs): Promise<PrismaCurso> {
    return this.prisma.curso.delete(args);
  }

  async findMatriculas(
    parentId: string,
    args: Prisma.MatriculaFindManyArgs
  ): Promise<PrismaMatricula[]> {
    return this.prisma.curso
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .matriculas(args);
  }
}
