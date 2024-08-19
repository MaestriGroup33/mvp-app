import { SortOrder } from "../../util/SortOrder";

export type MatriculaOrderByInput = {
  aluno?: SortOrder;
  alunoId?: SortOrder;
  alunoReferencia?: SortOrder;
  classificacaoReferencia?: SortOrder;
  createdAt?: SortOrder;
  cursoId?: SortOrder;
  cursoReferencia?: SortOrder;
  id?: SortOrder;
  numeroParcelas?: SortOrder;
  parcelaAdimplente?: SortOrder;
  parcelaAdimplenteId?: SortOrder;
  parcelaAdimplenteReferencia?: SortOrder;
  promotor?: SortOrder;
  promotorId?: SortOrder;
  promotorReferencia?: SortOrder;
  status?: SortOrder;
  statusMatricula?: SortOrder;
  taxaMatricula?: SortOrder;
  taxaMatriculaId?: SortOrder;
  taxaMatriculaReferencia?: SortOrder;
  updatedAt?: SortOrder;
};
