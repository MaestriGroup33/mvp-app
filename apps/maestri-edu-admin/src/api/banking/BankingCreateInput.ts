import { Decimal } from "decimal.js";

export type BankingCreateInput = {
  descricaoi?: string | null;
  idConvenio?: string | null;
  movimentaO?: Decimal | null;
  status: boolean;
};
