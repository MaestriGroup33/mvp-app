import { PerfilWhereInput } from "./PerfilWhereInput";
import { PerfilOrderByInput } from "./PerfilOrderByInput";

export type PerfilFindManyArgs = {
  where?: PerfilWhereInput;
  orderBy?: Array<PerfilOrderByInput>;
  skip?: number;
  take?: number;
};
