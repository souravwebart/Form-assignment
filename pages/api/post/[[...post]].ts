import { createHandler } from "@storyofams/next-api-decorators";
import { ReviewAPiController } from "../../../lib/Review/controllers/ReviewPost.controller";

export default createHandler(ReviewAPiController);
