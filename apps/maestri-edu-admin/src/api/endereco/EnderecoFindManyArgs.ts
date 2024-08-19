import { EnderecoWhereInput } from "./EnderecoWhereInput";
import { EnderecoOrderByInput } from "./EnderecoOrderByInput";

export type EnderecoFindManyArgs = {
  where?: EnderecoWhereInput;
  orderBy?: Array<EnderecoOrderByInput>;
  skip?: number;
  take?: number;
};
