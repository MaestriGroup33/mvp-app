import { DadosEscolares as TDadosEscolares } from "../api/dadosEscolares/DadosEscolares";

export const DADOSESCOLARES_TITLE_FIELD = "perfilReferencia";

export const DadosEscolaresTitle = (record: TDadosEscolares): string => {
  return record.perfilReferencia?.toString() || String(record.id);
};
