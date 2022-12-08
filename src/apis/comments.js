import axiosBaseUrl from "./connection";

export const addComment = async (id, { username, body }) => {
  try {
    const response = await axiosBaseUrl.post(`/reviews/${id}/comments`, {
      username,
      body,
    });
    return response.data.comment;
  } catch (err) {
    console.log(err);
  }
};
