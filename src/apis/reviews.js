import axiosBaseUrl from "./connection";

export const getReviews = () => {
  return axiosBaseUrl
    .get("/reviews")
    .then((response) => {
      return response.data.reviews;
    })
    .catch((err) => {
      console.log(err);
    });
};
