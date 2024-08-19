import { Banking as TBanking } from "../api/banking/Banking";

export const BANKING_TITLE_FIELD = "descricaoi";

export const BankingTitle = (record: TBanking): string => {
  return record.descricaoi?.toString() || String(record.id);
};
