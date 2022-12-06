import React from "react";
import { useEffect, useState } from "react";

import { getReviews } from "../apis/reviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
      <SingleReview reviews={reviews} />
    </div>
  );
};

export default Reviews;
