import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DadosEscolaresList } from "./dadosEscolares/DadosEscolaresList";
import { DadosEscolaresCreate } from "./dadosEscolares/DadosEscolaresCreate";
import { DadosEscolaresEdit } from "./dadosEscolares/DadosEscolaresEdit";
import { DadosEscolaresShow } from "./dadosEscolares/DadosEscolaresShow";
import { PerfilList } from "./perfil/PerfilList";
import { PerfilCreate } from "./perfil/PerfilCreate";
import { PerfilEdit } from "./perfil/PerfilEdit";
import { PerfilShow } from "./perfil/PerfilShow";
import { EnderecoList } from "./endereco/EnderecoList";
import { EnderecoCreate } from "./endereco/EnderecoCreate";
import { EnderecoEdit } from "./endereco/EnderecoEdit";
import { EnderecoShow } from "./endereco/EnderecoShow";
import { ContratoList } from "./contrato/ContratoList";
import { ContratoCreate } from "./contrato/ContratoCreate";
import { ContratoEdit } from "./contrato/ContratoEdit";
import { ContratoShow } from "./contrato/ContratoShow";
import { DocumentoList } from "./documento/DocumentoList";
import { DocumentoCreate } from "./documento/DocumentoCreate";
import { DocumentoEdit } from "./documento/DocumentoEdit";
import { DocumentoShow } from "./documento/DocumentoShow";
import { CursoList } from "./curso/CursoList";
import { CursoCreate } from "./curso/CursoCreate";
import { CursoEdit } from "./curso/CursoEdit";
import { CursoShow } from "./curso/CursoShow";
import { ClassificacaoList } from "./classificacao/ClassificacaoList";
import { ClassificacaoCreate } from "./classificacao/ClassificacaoCreate";
import { ClassificacaoEdit } from "./classificacao/ClassificacaoEdit";
import { ClassificacaoShow } from "./classificacao/ClassificacaoShow";
import { BankingList } from "./banking/BankingList";
import { BankingCreate } from "./banking/BankingCreate";
import { BankingEdit } from "./banking/BankingEdit";
import { BankingShow } from "./banking/BankingShow";
import { MatriculaList } from "./matricula/MatriculaList";
import { MatriculaCreate } from "./matricula/MatriculaCreate";
import { MatriculaEdit } from "./matricula/MatriculaEdit";
import { MatriculaShow } from "./matricula/MatriculaShow";
import { ParcelaList } from "./parcela/ParcelaList";
import { ParcelaCreate } from "./parcela/ParcelaCreate";
import { ParcelaEdit } from "./parcela/ParcelaEdit";
import { ParcelaShow } from "./parcela/ParcelaShow";
import { CobrancaList } from "./cobranca/CobrancaList";
import { CobrancaCreate } from "./cobranca/CobrancaCreate";
import { CobrancaEdit } from "./cobranca/CobrancaEdit";
import { CobrancaShow } from "./cobranca/CobrancaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MaestriEdu"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DadosEscolares"
          list={DadosEscolaresList}
          edit={DadosEscolaresEdit}
          create={DadosEscolaresCreate}
          show={DadosEscolaresShow}
        />
        <Resource
          name="Perfil"
          list={PerfilList}
          edit={PerfilEdit}
          create={PerfilCreate}
          show={PerfilShow}
        />
        <Resource
          name="Endereco"
          list={EnderecoList}
          edit={EnderecoEdit}
          create={EnderecoCreate}
          show={EnderecoShow}
        />
        <Resource
          name="Contrato"
          list={ContratoList}
          edit={ContratoEdit}
          create={ContratoCreate}
          show={ContratoShow}
        />
        <Resource
          name="Documento"
          list={DocumentoList}
          edit={DocumentoEdit}
          create={DocumentoCreate}
          show={DocumentoShow}
        />
        <Resource
          name="Curso"
          list={CursoList}
          edit={CursoEdit}
          create={CursoCreate}
          show={CursoShow}
        />
        <Resource
          name="Classificacao"
          list={ClassificacaoList}
          edit={ClassificacaoEdit}
          create={ClassificacaoCreate}
          show={ClassificacaoShow}
        />
        <Resource
          name="Banking"
          list={BankingList}
          edit={BankingEdit}
          create={BankingCreate}
          show={BankingShow}
        />
        <Resource
          name="Matricula"
          list={MatriculaList}
          edit={MatriculaEdit}
          create={MatriculaCreate}
          show={MatriculaShow}
        />
        <Resource
          name="Parcela"
          list={ParcelaList}
          edit={ParcelaEdit}
          create={ParcelaCreate}
          show={ParcelaShow}
        />
        <Resource
          name="Cobranca"
          list={CobrancaList}
          edit={CobrancaEdit}
          create={CobrancaCreate}
          show={CobrancaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
