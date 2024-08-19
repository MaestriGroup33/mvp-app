import { Classificacao as TClassificacao } from "../api/classificacao/Classificacao";

export const CLASSIFICACAO_TITLE_FIELD = "id";

export const ClassificacaoTitle = (record: TClassificacao): string => {
  return record.id?.toString() || String(record.id);
};
