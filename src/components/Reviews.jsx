import React from "react";
import { useEffect, useState, useContext } from "react";

import { getReviews } from "../apis/reviews";
import SingleReview from "./SingleReview";
import { ClipLoader } from "react-spinners";
import { useLocation, useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  let selectedCategory = null;
  if (location.search !== "") {
    selectedCategory = location.search.split("?").join("");
  }
  //const [, setSearchParams] = useSearchParams({});

  useEffect(() => {
    getReviews(selectedCategory).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
    //setSearchParams({ category: selectedCategory });
    setIsLoading(false);
  }, [selectedCategory]);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color={"#fff"} size={60} />
        </div>
      ) : (
        <div>
          <h2 className="text-center">Reviews List</h2>
          <SingleReview reviews={reviews} category={selectedCategory} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
