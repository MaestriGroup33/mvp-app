/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ContratoService } from "../contrato.service";
import { ContratoCreateInput } from "./ContratoCreateInput";
import { Contrato } from "./Contrato";
import { ContratoFindManyArgs } from "./ContratoFindManyArgs";
import { ContratoWhereUniqueInput } from "./ContratoWhereUniqueInput";
import { ContratoUpdateInput } from "./ContratoUpdateInput";

export class ContratoControllerBase {
  constructor(protected readonly service: ContratoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contrato })
  async createContrato(
    @common.Body() data: ContratoCreateInput
  ): Promise<Contrato> {
    return await this.service.createContrato({
      data: data,
      select: {
        createdAt: true,
        id: true,
        perfilReferencia: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contrato] })
  @ApiNestedQuery(ContratoFindManyArgs)
  async contratoes(@common.Req() request: Request): Promise<Contrato[]> {
    const args = plainToClass(ContratoFindManyArgs, request.query);
    return this.service.contratoes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        perfilReferencia: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contrato })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contrato(
    @common.Param() params: ContratoWhereUniqueInput
  ): Promise<Contrato | null> {
    const result = await this.service.contrato({
      where: params,
      select: {
        createdAt: true,
        id: true,
        perfilReferencia: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contrato })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContrato(
    @common.Param() params: ContratoWhereUniqueInput,
    @common.Body() data: ContratoUpdateInput
  ): Promise<Contrato | null> {
    try {
      return await this.service.updateContrato({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          perfilReferencia: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contrato })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContrato(
    @common.Param() params: ContratoWhereUniqueInput
  ): Promise<Contrato | null> {
    try {
      return await this.service.deleteContrato({
        where: params,
        select: {
          createdAt: true,
          id: true,
          perfilReferencia: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
