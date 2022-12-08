import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SingleReview = ({ reviews }) => {
  const navigate = useNavigate();

  const handelFullReview = (e, id) => {
    e.preventDefault();
    navigate(`/reviews/${id}`);
  };

  const handelViewComment = (e, id) => {
    e.preventDefault();
    navigate(`/reviews/${id}/comments`);
  };

  return (
    <main>
      <ul className="single-view-ul">
        {reviews.map((review) => {
          return (
            <li className="single-view" key={review.review_id}>
              <p>
                <strong>Title:</strong> {review.title}
              </p>
              <p>
                <strong>Category:</strong> {review.category}
              </p>
              <p>
                <strong>Designer:</strong> {review.designer}
              </p>
              <p>
                <strong>Owner:</strong> {review.owner}
              </p>
              {/* <p>Votes: {"⭐".repeat(review.votes)}</p> */}
              <div className="comment-name-vote">
                <p>Votes: {review.votes}</p>
                <p>Comments: {review.comment_count}</p>
              </div>
              <div className="div-center">
                <img src={review.review_img_url} alt="Review Image" />
              </div>
              <div className="single-view-buttons mb-2">
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="single-view-button"
                  onClick={(e) => handelFullReview(e, review.review_id)}
                >
                  Full Review
                </Button>
                {/* {review.comment_count > 0 ? ( */}
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="single-view-button"
                  onClick={(e) => handelViewComment(e, review.review_id)}
                >
                  Comments
                </Button>
                {/* ) : null} */}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleReview;
