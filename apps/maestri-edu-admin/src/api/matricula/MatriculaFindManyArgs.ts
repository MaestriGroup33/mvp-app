import { MatriculaWhereInput } from "./MatriculaWhereInput";
import { MatriculaOrderByInput } from "./MatriculaOrderByInput";

export type MatriculaFindManyArgs = {
  where?: MatriculaWhereInput;
  orderBy?: Array<MatriculaOrderByInput>;
  skip?: number;
  take?: number;
};
