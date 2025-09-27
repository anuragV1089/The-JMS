import { AxiosError } from "axios";
import api from "./axiosApi";
import toast from "react-hot-toast";

export const setUpAxiosInterceptor = (refreshToken) => {
  api.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        typeof refreshToken === "function"
      ) {
        originalRequest._retry = true;

        try {
          const refreshResponse = await refreshToken();
          if (refreshResponse.success === true) {
            originalRequest.headers.Authorization = `bearer ${refreshResponse.data}`;
            return api(originalRequest);
          } else {
            toast.error(refreshResponse.data);
          }
        } catch (error) {
          console.log(`Something went wrong`);
          console.log(error);
        }
      }

      return Promise.reject(error);
    }
  );
};
