import React from "react";
import { ReviewsContext } from "../context/ReviewsContext";
import { useContext, useEffect } from "react";
import { getTop10Reviews } from "../apis/reviews";
import SingleReview from "./SingleReview";

const Home = () => {
  const { setReviews } = useContext(ReviewsContext);
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
      <SingleReview />
    </div>
  );
};

export default Home;
