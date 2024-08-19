/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DocumentoWhereUniqueInput } from "./DocumentoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocumentoUpdateInput } from "./DocumentoUpdateInput";

@ArgsType()
class UpdateDocumentoArgs {
  @ApiProperty({
    required: true,
    type: () => DocumentoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentoWhereUniqueInput)
  @Field(() => DocumentoWhereUniqueInput, { nullable: false })
  where!: DocumentoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocumentoUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocumentoUpdateInput)
  @Field(() => DocumentoUpdateInput, { nullable: false })
  data!: DocumentoUpdateInput;
}

export { UpdateDocumentoArgs as UpdateDocumentoArgs };
