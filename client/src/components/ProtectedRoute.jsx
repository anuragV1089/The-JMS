import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { accessToken, isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <p className="mt-40 text-white text-3xl">
      You're Logged Out! Please Log in to see content!
    </p>
  );
}
