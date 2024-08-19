import { CobrancaWhereInput } from "./CobrancaWhereInput";
import { CobrancaOrderByInput } from "./CobrancaOrderByInput";

export type CobrancaFindManyArgs = {
  where?: CobrancaWhereInput;
  orderBy?: Array<CobrancaOrderByInput>;
  skip?: number;
  take?: number;
};
