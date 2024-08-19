import { Decimal } from "decimal.js";

export type BankingUpdateInput = {
  descricaoi?: string | null;
  idConvenio?: string | null;
  movimentaO?: Decimal | null;
  status?: boolean;
};
