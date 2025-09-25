import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AllJyots from "./pages/AllJyots.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Layout from "./components/Layout/Layout.jsx";
import NewJyot from "./pages/NewJyot.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AllTemples from "./pages/AllTemples.jsx";
import Temple from "./pages/Temple.jsx";
import NewTemple from "./pages/NewTemple.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/temples" element={<AllTemples />} />
        <Route path="/temples/new" element={<NewTemple />} />
        <Route path="/temples/:id" element={<Temple />} />
        <Route path="/jyots/:id/new" element={<NewJyot />} />
        <Route path="/:id/jyots" element={<AllJyots />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
