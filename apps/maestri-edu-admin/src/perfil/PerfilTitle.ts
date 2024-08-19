import { Perfil as TPerfil } from "../api/perfil/Perfil";

export const PERFIL_TITLE_FIELD = "cpf";

export const PerfilTitle = (record: TPerfil): string => {
  return record.cpf?.toString() || String(record.id);
};
