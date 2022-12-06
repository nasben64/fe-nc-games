import React from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

const SingleReview = () => {
  const { reviews } = useContext(ReviewsContext);

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
              <p>Votes: {review.votes}</p>
              <img src={review.review_img_url} alt="Review Image" />
              <div className="single-view-buttons mb-2">
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="single-view-button"
                >
                  Update Votes
                </Button>
                <Button
                  variant="outline-dark"
                  size="sm"
                  className="single-view-button"
                >
                  View Comments
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleReview;
