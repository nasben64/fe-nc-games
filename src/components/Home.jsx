import React from "react";
import { useState, useEffect } from "react";
import { getTop10Reviews } from "../apis/reviews";
import SingleReview from "./SingleReview";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTop10Reviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });

    // setIsLoading(false);
  }, []);

  return (
    <div>
      <h2 className="text-center">Top 10 Reviews</h2>
      <SingleReview reviews={reviews} />
    </div>
  );
};

export default Home;
