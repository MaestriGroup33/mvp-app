import { ClassificacaoWhereInput } from "./ClassificacaoWhereInput";
import { ClassificacaoOrderByInput } from "./ClassificacaoOrderByInput";

export type ClassificacaoFindManyArgs = {
  where?: ClassificacaoWhereInput;
  orderBy?: Array<ClassificacaoOrderByInput>;
  skip?: number;
  take?: number;
};
