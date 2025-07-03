import axios from "axios";
import toast from "react-hot-toast";

const backendApi = import.meta.env.VITE_BACKEND_API_URL;
let accessToken = 0;
export const getAccessToken = (token) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: backendApi,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = accessToken;
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(`Inside req interceptor ${error}`);
  }
);

export default api;
