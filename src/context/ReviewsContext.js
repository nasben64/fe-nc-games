import React, { useState, createContext } from "react";

export const ReviewsContext = createContext();

export const ReviewsContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
};
