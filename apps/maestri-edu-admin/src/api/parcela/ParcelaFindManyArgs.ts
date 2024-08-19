import { ParcelaWhereInput } from "./ParcelaWhereInput";
import { ParcelaOrderByInput } from "./ParcelaOrderByInput";

export type ParcelaFindManyArgs = {
  where?: ParcelaWhereInput;
  orderBy?: Array<ParcelaOrderByInput>;
  skip?: number;
  take?: number;
};
