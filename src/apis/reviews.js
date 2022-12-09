import axiosBaseUrl from "./connection";

export const getReviews = async (searchParams) => {
  try {
    let response = [];
    if (searchParams === "") {
      response = await axiosBaseUrl.get("/reviews");
    } else {
      response = await axiosBaseUrl.get("/reviews", {
        params: {
          category: searchParams,
        },
      });
    }
    return response.data.reviews;
  } catch (err) {
    console.log(err);
  }
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

export const getReviewById = async (id) => {
  try {
    const response = await axiosBaseUrl.get(`/reviews/${id}`);
    return response.data.review[0];
  } catch (err) {
    console.log(err);
  }
};

export const getCommentsByReviewId = async (id) => {
  try {
    const response = await axiosBaseUrl.get(`/reviews/${id}/comments`);
    return response.data.comments;
  } catch (err) {
    console.log(err);
  }
};

export const updateVotes = async (id, votes) => {
  try {
    const response = await axiosBaseUrl.patch(`/reviews/${id}`, {
      inc_votes: votes,
    });
    return response.data.review;
  } catch (err) {
    console.log(err);
  }
};
