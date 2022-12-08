import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, updateVotes } from "../apis/reviews";
import Moment from "react-moment";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ReviewCard = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);

  const handelViewComment = (e, id) => {
    e.preventDefault();
    navigate(`/reviews/${id}/comments`);
  };

  const handleLikeClick = (e) => {
    e.preventDefault();
    const vote = e.target.value;
    setLikeCount((currCount) => {
      return vote > currCount ? +vote + 1 : currCount + 1;
    });
    updateVotes(review_id, 1);
  };

  const handleDislikeClick = (e) => {
    e.preventDefault();
    const vote = e.target.value;
    setLikeCount((currCount) => {
      return vote > currCount ? +vote - 1 : currCount - 1;
    });
    updateVotes(review_id, -1);
  };

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
      <div className="comment-name-vote">
        <p>Votes: {likeCount > 0 ? likeCount : review.votes}</p>
        <button
          className="like-button"
          value={likeCount > 0 ? likeCount : review.votes}
          onClick={(e) => handleLikeClick(e)}
        >
          👍
        </button>
        <button
          className="like-button"
          value={likeCount > 0 ? likeCount : review.votes}
          onClick={(e) => handleDislikeClick(e)}
        >
          👎
        </button>
      </div>
      <p>Comments: {review.comment_count}</p>
      {review.comment_count > 0 ? (
        <Button
          variant="outline-dark"
          size="lg"
          className="single-view-button"
          onClick={(e) => handelViewComment(e, review.review_id)}
        >
          Comments
        </Button>
      ) : null}
    </div>
  );
};

export default ReviewCard;
