import { Body, Post } from "@storyofams/next-api-decorators";
import { Validation } from "../../validationPipe";
import { UpsertReviewDto } from "../dtos/Review.dto";
import Review from "../Service/allReview.service";

export class ReviewAPiController {
  @Post("/post-review")
  postReview(@Body(Validation) body: UpsertReviewDto) {
    return Review(body);
  }
}
