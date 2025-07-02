import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { accessToken, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log(`inside protectedRoute`);
    return <div>Loading...</div>;
  }

  return <Outlet />;
}
