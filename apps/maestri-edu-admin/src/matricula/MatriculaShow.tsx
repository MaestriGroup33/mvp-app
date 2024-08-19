import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CURSO_TITLE_FIELD } from "../curso/CursoTitle";

export const MatriculaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aluno" source="aluno" />
        <TextField label="alunoId" source="alunoId" />
        <TextField label="alunoReferencia" source="alunoReferencia" />
        <TextField
          label="classificacaoReferencia"
          source="classificacaoReferencia"
        />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="curso" source="curso.id" reference="Curso">
          <TextField source={CURSO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="cursoReferencia" source="cursoReferencia" />
        <TextField label="ID" source="id" />
        <TextField label="numeroParcelas" source="numeroParcelas" />
        <TextField label="parcelaAdimplente" source="parcelaAdimplente" />
        <TextField label="parcelaAdimplenteId" source="parcelaAdimplenteId" />
        <TextField
          label="parcelaAdimplenteReferencia"
          source="parcelaAdimplenteReferencia"
        />
        <TextField label="promotor" source="promotor" />
        <TextField label="promotorId" source="promotorId" />
        <TextField label="promotorReferencia" source="promotorReferencia" />
        <TextField label="status" source="status" />
        <TextField label="statusMatricula" source="statusMatricula" />
        <TextField label="taxaMatricula" source="taxaMatricula" />
        <TextField label="taxaMatriculaId" source="taxaMatriculaId" />
        <TextField
          label="taxaMatriculaReferencia"
          source="taxaMatriculaReferencia"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
