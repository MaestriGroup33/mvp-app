import { BankingWhereInput } from "./BankingWhereInput";
import { BankingOrderByInput } from "./BankingOrderByInput";

export type BankingFindManyArgs = {
  where?: BankingWhereInput;
  orderBy?: Array<BankingOrderByInput>;
  skip?: number;
  take?: number;
};
