import { Endereco as TEndereco } from "../api/endereco/Endereco";

export const ENDERECO_TITLE_FIELD = "perfilReferencia";

export const EnderecoTitle = (record: TEndereco): string => {
  return record.perfilReferencia?.toString() || String(record.id);
};
