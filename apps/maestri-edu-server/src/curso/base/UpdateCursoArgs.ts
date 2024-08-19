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
import { CursoWhereUniqueInput } from "./CursoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CursoUpdateInput } from "./CursoUpdateInput";

@ArgsType()
class UpdateCursoArgs {
  @ApiProperty({
    required: true,
    type: () => CursoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CursoWhereUniqueInput)
  @Field(() => CursoWhereUniqueInput, { nullable: false })
  where!: CursoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CursoUpdateInput,
  })
  @ValidateNested()
  @Type(() => CursoUpdateInput)
  @Field(() => CursoUpdateInput, { nullable: false })
  data!: CursoUpdateInput;
}

export { UpdateCursoArgs as UpdateCursoArgs };
