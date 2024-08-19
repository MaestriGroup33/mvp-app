import { Contrato as TContrato } from "../api/contrato/Contrato";

export const CONTRATO_TITLE_FIELD = "perfilReferencia";

export const ContratoTitle = (record: TContrato): string => {
  return record.perfilReferencia?.toString() || String(record.id);
};
