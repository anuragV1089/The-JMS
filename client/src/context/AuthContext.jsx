import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { setUpAxiosInterceptor } from "../lib/axiosInterceptor";
import { getAccessToken } from "../lib/axiosApi";

const backendApi = import.meta.env.VITE_BACKEND_API_URL;
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuth must be use within an AuthProvider`);
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${backendApi}/users/refresh`, {
        withCredentials: true,
      });
      if (response.status == 200) {
        setAccessToken(response.data.accessToken);
        setUser(response.data.user);
      }
    } catch (err) {
      console.error("Auth Check Failed", err);
      toast.error(err.response.data.message + "Please Login again!");
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {
    const loadingToast = toast.loading("Logging in...");
    try {
      let res = {};
      await axios
        .post(`${backendApi}/users/login`, userData, {
          withCredentials: true,
        })
        .then((response) => {
          setAccessToken(response.data.accessToken);
          setUser(response.data.user);
          toast.dismiss(loadingToast);
          toast.success("Welcome Back!", { icon: "👋" });
          res = { success: true, data: response.data };
        })
        .catch((err) => {
          console.log(err);
          toast.dismiss(loadingToast);
          toast.error(err.response.data.message);
          res = { success: false, message: err.response.data.message };
        });

      return res;
    } catch (err) {
      return { success: false, message: err.response.data.message };
    }
  };

  const signup = async (userData) => {
    try {
      let res = {};
      await axios
        .post(`${backendApi}/users/signup`, userData, {
          withCredentials: true,
        })
        .then(async (response) => {
          res = await toast.promise(login(userData), {
            success: "Successfully Signed In!",
          });
        })
        .catch((err) => {
          res = { success: false, error: err.message };
        });

      return res;
    } catch (err) {
      console.error(`Tagda error ${err.message}`);
      return { success: false, error: err.response.data.message };
    }
  };

  const logout = async () => {
    try {
      let res = {};
      await axios
        .get(`${backendApi}/users/logout`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          toast.success("You're logged out!", { icon: "👋" });
          setAccessToken(null);
          setUser(null);
          res = { success: true, data: res.data };
        });
      return res;
    } catch (err) {
      console.error(`Logout Error ${err}`);
      return { success: false, data: err.response.data.message };
    }
  };

  const refreshToken = async () => {
    try {
      let res = {};
      await axios
        .get(`${backendApi}/users/refresh`, {
          withCredentials: true,
        })
        .then((response) => {
          const data = response.data;
          setAccessToken(data.accessToken);
          console.log(data.accessToken);
          res = { success: true, data: data.accessToken };
        });
      return res;
    } catch (err) {
      console.error(`Token refresh Failed ${err}`);
      await logout();
      toast.error("Please Login again!");
      return { success: false, data: err.response.data.message };
    }
  };

  // useEffect(() => {
  //   console.log("🔑 Access token changed:", {
  //     token: accessToken ? `${accessToken.substring(0, 10)}...` : null,
  //     timestamp: new Date().toISOString(),
  //   });
  // }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      setUpAxiosInterceptor(refreshToken);
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      getAccessToken(accessToken);
    }
  }, [accessToken]);

  const value = useMemo(
    () => ({
      accessToken,
      user,
      loading,
      login,
      signup,
      logout,
      refreshToken,
      isAuthenticated: !!accessToken,
    }),
    [accessToken, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
