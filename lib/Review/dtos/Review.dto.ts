import { IsNotEmpty, ValidateNested } from "class-validator";

class Head {}

export class Body {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  body!: string;

  @IsNotEmpty()
  userId!: number;
}
export class UpsertReviewDto {
  @ValidateNested()
  @IsNotEmpty()
  body!: Body;
}
