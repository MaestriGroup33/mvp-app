import { Module } from "@nestjs/common";
import { DadosEscolaresModule } from "./dadosEscolares/dadosEscolares.module";
import { PerfilModule } from "./perfil/perfil.module";
import { EnderecoModule } from "./endereco/endereco.module";
import { ContratoModule } from "./contrato/contrato.module";
import { DocumentoModule } from "./documento/documento.module";
import { CursoModule } from "./curso/curso.module";
import { ClassificacaoModule } from "./classificacao/classificacao.module";
import { BankingModule } from "./banking/banking.module";
import { MatriculaModule } from "./matricula/matricula.module";
import { ParcelaModule } from "./parcela/parcela.module";
import { CobrancaModule } from "./cobranca/cobranca.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DadosEscolaresModule,
    PerfilModule,
    EnderecoModule,
    ContratoModule,
    DocumentoModule,
    CursoModule,
    ClassificacaoModule,
    BankingModule,
    MatriculaModule,
    ParcelaModule,
    CobrancaModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
