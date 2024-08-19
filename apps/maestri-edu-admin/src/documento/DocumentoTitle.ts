import { Documento as TDocumento } from "../api/documento/Documento";

export const DOCUMENTO_TITLE_FIELD = "perfilReferencia";

export const DocumentoTitle = (record: TDocumento): string => {
  return record.perfilReferencia?.toString() || String(record.id);
};
