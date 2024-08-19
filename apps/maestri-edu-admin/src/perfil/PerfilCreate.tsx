import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PerfilCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cpf" source="cpf" />
        <TextInput label="numeroCelular" source="numeroCelular" />
      </SimpleForm>
    </Create>
  );
};
