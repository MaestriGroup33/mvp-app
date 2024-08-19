import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CursoTitle } from "../curso/CursoTitle";

export const MatriculaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="aluno" source="aluno" />
        <TextInput label="alunoId" source="alunoId" />
        <TextInput label="alunoReferencia" source="alunoReferencia" />
        <TextInput
          label="classificacaoReferencia"
          source="classificacaoReferencia"
        />
        <ReferenceInput source="curso.id" reference="Curso" label="curso">
          <SelectInput optionText={CursoTitle} />
        </ReferenceInput>
        <TextInput label="cursoReferencia" source="cursoReferencia" />
        <NumberInput step={1} label="numeroParcelas" source="numeroParcelas" />
        <TextInput label="parcelaAdimplente" source="parcelaAdimplente" />
        <TextInput label="parcelaAdimplenteId" source="parcelaAdimplenteId" />
        <TextInput
          label="parcelaAdimplenteReferencia"
          source="parcelaAdimplenteReferencia"
        />
        <TextInput label="promotor" source="promotor" />
        <TextInput label="promotorId" source="promotorId" />
        <TextInput label="promotorReferencia" source="promotorReferencia" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="statusMatricula"
          label="statusMatricula"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="taxaMatricula" source="taxaMatricula" />
        <TextInput label="taxaMatriculaId" source="taxaMatriculaId" />
        <TextInput
          label="taxaMatriculaReferencia"
          source="taxaMatriculaReferencia"
        />
      </SimpleForm>
    </Edit>
  );
};
