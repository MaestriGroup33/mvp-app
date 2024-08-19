import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CursoWhereUniqueInput } from "../curso/CursoWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MatriculaWhereInput = {
  aluno?: StringNullableFilter;
  alunoId?: StringNullableFilter;
  alunoReferencia?: StringNullableFilter;
  classificacaoReferencia?: StringNullableFilter;
  curso?: CursoWhereUniqueInput;
  cursoReferencia?: StringNullableFilter;
  id?: StringFilter;
  numeroParcelas?: IntNullableFilter;
  parcelaAdimplente?: StringNullableFilter;
  parcelaAdimplenteId?: StringNullableFilter;
  parcelaAdimplenteReferencia?: StringNullableFilter;
  promotor?: StringNullableFilter;
  promotorId?: StringNullableFilter;
  promotorReferencia?: StringNullableFilter;
  status?: "Option1";
  statusMatricula?: "Option1";
  taxaMatricula?: StringNullableFilter;
  taxaMatriculaId?: StringNullableFilter;
  taxaMatriculaReferencia?: StringNullableFilter;
};
