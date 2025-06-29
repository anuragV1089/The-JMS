import axios from "axios";
const backendApi = import.meta.env.VITE_BACKEND_API_URL;

export const protectedCall = (token) => {
  return axios.create({
    baseURL: backendApi,
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": `application/json`,
    },
  });
};
