import React from "react";
import { useEffect, useState, useContext } from "react";

import { getReviews } from "../apis/reviews";
import SingleReview from "./SingleReview";
import { ClipLoader } from "react-spinners";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color={"#fff"} size={60} />
        </div>
      ) : (
        <div>
          <h2 className="text-center">Reviews List</h2>
          <SingleReview reviews={reviews} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
