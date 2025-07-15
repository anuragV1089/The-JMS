import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const { accessToken, isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <> {toast.error(`You're logged out! Please Login to see content`)}</>
  );
}
