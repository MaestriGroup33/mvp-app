import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const BankingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="descrição" source="descricaoi" />
        <TextInput label="idConvenio" source="idConvenio" />
        <NumberInput label="movimentação" source="movimentaO" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
