import axiosBaseUrl from "./connection";

export const getUsers = () => {
  return axiosBaseUrl
    .get("/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((err) => {
      console.log(err);
    });
};
