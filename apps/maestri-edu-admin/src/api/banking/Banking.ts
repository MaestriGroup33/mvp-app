import { Decimal } from "decimal.js";

export type Banking = {
  createdAt: Date;
  descricaoi: string | null;
  id: string;
  idConvenio: string | null;
  movimentaO: Decimal | null;
  status: boolean;
  updatedAt: Date;
};
