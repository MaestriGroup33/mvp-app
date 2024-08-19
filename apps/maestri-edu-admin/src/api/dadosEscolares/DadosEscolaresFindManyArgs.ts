import { DadosEscolaresWhereInput } from "./DadosEscolaresWhereInput";
import { DadosEscolaresOrderByInput } from "./DadosEscolaresOrderByInput";

export type DadosEscolaresFindManyArgs = {
  where?: DadosEscolaresWhereInput;
  orderBy?: Array<DadosEscolaresOrderByInput>;
  skip?: number;
  take?: number;
};
