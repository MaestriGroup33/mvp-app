import { Curso } from "../curso/Curso";

export type Matricula = {
  aluno: string | null;
  alunoId: string | null;
  alunoReferencia: string | null;
  classificacaoReferencia: string | null;
  createdAt: Date;
  curso?: Curso | null;
  cursoReferencia: string | null;
  id: string;
  numeroParcelas: number | null;
  parcelaAdimplente: string | null;
  parcelaAdimplenteId: string | null;
  parcelaAdimplenteReferencia: string | null;
  promotor: string | null;
  promotorId: string | null;
  promotorReferencia: string | null;
  status?: "Option1" | null;
  statusMatricula?: "Option1" | null;
  taxaMatricula: string | null;
  taxaMatriculaId: string | null;
  taxaMatriculaReferencia: string | null;
  updatedAt: Date;
};
