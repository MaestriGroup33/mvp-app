import { MatriculaCreateNestedManyWithoutCursosInput } from "./MatriculaCreateNestedManyWithoutCursosInput";

export type CursoCreateInput = {
  matriculas?: MatriculaCreateNestedManyWithoutCursosInput;
};
