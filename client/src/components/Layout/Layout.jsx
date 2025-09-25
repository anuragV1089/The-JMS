import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            padding: "10px 30px",
            backgroundColor: "#000",
            color: "#fff",
          },
          success: {
            style: {
              background:
                "linear-gradient(to right, rgba(0, 128, 0, 0.6) 0%, rgba(0, 128, 0, 0) 40%), #191919",
              boxShadow: "0 5px 20px rgba(0, 128, 0, 0.4)",
            },
          },
          error: {
            style: {
              background:
                "linear-gradient(to right, rgba(128, 0, 0, 0.6) 0%, rgba(0, 128, 0, 0) 40%), #000",
              boxShadow: "0 5px 20px rgba(128, 0, 0, 0.4)",
            },
          },
        }}
      />
    </div>
  );
}
