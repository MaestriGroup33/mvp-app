import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const BankingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="descrição" source="descricaoi" />
        <TextInput label="idConvenio" source="idConvenio" />
        <NumberInput label="movimentação" source="movimentaO" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
