import { CursoWhereUniqueInput } from "../curso/CursoWhereUniqueInput";

export type MatriculaUpdateInput = {
  aluno?: string | null;
  alunoId?: string | null;
  alunoReferencia?: string | null;
  classificacaoReferencia?: string | null;
  curso?: CursoWhereUniqueInput | null;
  cursoReferencia?: string | null;
  numeroParcelas?: number | null;
  parcelaAdimplente?: string | null;
  parcelaAdimplenteId?: string | null;
  parcelaAdimplenteReferencia?: string | null;
  promotor?: string | null;
  promotorId?: string | null;
  promotorReferencia?: string | null;
  status?: "Option1" | null;
  statusMatricula?: "Option1" | null;
  taxaMatricula?: string | null;
  taxaMatriculaId?: string | null;
  taxaMatriculaReferencia?: string | null;
};
