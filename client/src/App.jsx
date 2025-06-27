import "./App.css";
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

function App() {
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/jyots" element={<AllJyots />} />
        <Route path="/jyots/new" element={<NewJyot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );

  return <>app</>;
}

export default App;
