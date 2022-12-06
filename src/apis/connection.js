import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "https://nasben.cyclic.app/api",
});

export default axiosBaseUrl;
