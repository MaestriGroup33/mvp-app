import { Matricula } from "../matricula/Matricula";

export type Curso = {
  createdAt: Date;
  id: string;
  matriculas?: Array<Matricula>;
  updatedAt: Date;
};
