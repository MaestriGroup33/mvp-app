import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type BankingWhereInput = {
  descricaoi?: StringNullableFilter;
  id?: StringFilter;
  idConvenio?: StringNullableFilter;
  movimentaO?: DecimalNullableFilter;
  status?: BooleanFilter;
};
