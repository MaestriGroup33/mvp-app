/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Contrato } from "./Contrato";
import { ContratoCountArgs } from "./ContratoCountArgs";
import { ContratoFindManyArgs } from "./ContratoFindManyArgs";
import { ContratoFindUniqueArgs } from "./ContratoFindUniqueArgs";
import { CreateContratoArgs } from "./CreateContratoArgs";
import { UpdateContratoArgs } from "./UpdateContratoArgs";
import { DeleteContratoArgs } from "./DeleteContratoArgs";
import { ContratoService } from "../contrato.service";
@graphql.Resolver(() => Contrato)
export class ContratoResolverBase {
  constructor(protected readonly service: ContratoService) {}

  async _contratoesMeta(
    @graphql.Args() args: ContratoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Contrato])
  async contratoes(
    @graphql.Args() args: ContratoFindManyArgs
  ): Promise<Contrato[]> {
    return this.service.contratoes(args);
  }

  @graphql.Query(() => Contrato, { nullable: true })
  async contrato(
    @graphql.Args() args: ContratoFindUniqueArgs
  ): Promise<Contrato | null> {
    const result = await this.service.contrato(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Contrato)
  async createContrato(
    @graphql.Args() args: CreateContratoArgs
  ): Promise<Contrato> {
    return await this.service.createContrato({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Contrato)
  async updateContrato(
    @graphql.Args() args: UpdateContratoArgs
  ): Promise<Contrato | null> {
    try {
      return await this.service.updateContrato({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Contrato)
  async deleteContrato(
    @graphql.Args() args: DeleteContratoArgs
  ): Promise<Contrato | null> {
    try {
      return await this.service.deleteContrato(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
