import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PerfilWhereInput = {
  cpf?: StringNullableFilter;
  id?: StringFilter;
  numeroCelular?: StringNullableFilter;
};
