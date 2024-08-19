import { Matricula as TMatricula } from "../api/matricula/Matricula";

export const MATRICULA_TITLE_FIELD = "aluno";

export const MatriculaTitle = (record: TMatricula): string => {
  return record.aluno?.toString() || String(record.id);
};
