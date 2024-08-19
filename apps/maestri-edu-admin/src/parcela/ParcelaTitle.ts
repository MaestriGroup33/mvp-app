import { Parcela as TParcela } from "../api/parcela/Parcela";

export const PARCELA_TITLE_FIELD = "id";

export const ParcelaTitle = (record: TParcela): string => {
  return record.id?.toString() || String(record.id);
};
