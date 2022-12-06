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

function compare(a, b) {
  if (a.votes < b.votes) {
    return 1;
  }
  if (a.votes > b.votes) {
    return -1;
  }
  return 0;
}

export const getTop10Reviews = async () => {
  try {
    const response = await axiosBaseUrl.get("/reviews");
    const first10 = response.data.reviews.sort(compare).slice(0, 10);
    return first10;
  } catch (err) {
    console.log(err);
  }
};
