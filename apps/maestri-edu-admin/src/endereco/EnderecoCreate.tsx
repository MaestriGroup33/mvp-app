import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EnderecoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="perfilReferencia" source="perfilReferencia" />
      </SimpleForm>
    </Create>
  );
};
