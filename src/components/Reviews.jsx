import React from "react";
import { useContext, useEffect, useState } from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { getReviews } from "../apis/reviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const { setReviews } = useContext(ReviewsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Looading ....</h2>;
  }

  return (
    <div>
      <h2 className="text-center">Reviews List</h2>
      <SingleReview />
    </div>
  );
};

export default Reviews;
