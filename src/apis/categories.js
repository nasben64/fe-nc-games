import axiosBaseUrl from "./connection";

export const getCategories = () => {
  return axiosBaseUrl
    .get("/categories")
    .then((response) => {
      return response.data.categories;
    })
    .catch((err) => {
      console.log(err);
    });
};

