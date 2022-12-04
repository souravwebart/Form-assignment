import axios, { AxiosError } from "axios";
import { HandleError } from "../../errorHandlers";
import { UpsertReviewDto } from "../dtos/Review.dto";

const postService = "https://jsonplaceholder.typicode.com/posts";

const Review = async (data: UpsertReviewDto) => {
  return await axios({
    method: "POST",
    url: postService,
    data,
    responseType: "json",
  })
    .then((response) => response.data)
    .catch((error: AxiosError) => HandleError(error));
};
export default Review;
