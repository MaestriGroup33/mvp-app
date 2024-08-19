import { Cobranca as TCobranca } from "../api/cobranca/Cobranca";

export const COBRANCA_TITLE_FIELD = "id";

export const CobrancaTitle = (record: TCobranca): string => {
  return record.id?.toString() || String(record.id);
};
