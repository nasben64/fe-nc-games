import { logDOM } from "@testing-library/react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis/reviews";
import Moment from "react-moment";

const ReviewCard = (props) => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);

  console.log("the id", review_id);

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);

  console.log("the review", review);

  return (
    <div className="review-card">
      <h2 className="text-center">{review.title}</h2>
      <img
        className="review-card-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <p>Review: {review.review_body}</p>
      <p>Category: {review.category}</p>

      <p>Designed by: {review.designer}</p>

      <p>
        Reviewed by: {review.owner} on{" "}
        <Moment format="DD/MM/YYYY">{review.created_at}</Moment>
      </p>

      <p>Comments: {review.comment_count}</p>
    </div>
  );
};

export default ReviewCard;
