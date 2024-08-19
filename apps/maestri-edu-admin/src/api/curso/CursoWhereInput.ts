import { StringFilter } from "../../util/StringFilter";
import { MatriculaListRelationFilter } from "../matricula/MatriculaListRelationFilter";

export type CursoWhereInput = {
  id?: StringFilter;
  matriculas?: MatriculaListRelationFilter;
};
