import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axiosApi";
import { DotLoader } from "react-spinners";
import img from "../assets/addTempleAlt.jpg";

export default function NewTemple(params) {
  const [formData, setFormData] = useState({
    templeName: "",
    address: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const onSubmitHandler = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      const response = await api.post("/temples/new", {
        ...formData,
        admin: user._id,
      });
      if (response) {
        toast.success("New Temple Added!");
        navigate("/temples");
        setFormData({});
      } else {
        toast.error(response.response.data);
      }
    } catch (err) {
      console.log(err);
    }
    setSubmitting(false);
  };
  return (
    <div className="text-white p-4 min-h-screen relative">
      <div className="h-150 rounded-lg w-full bg-black mt-25">
        <img
          src={img}
          className="object-cover w-full h-full rounded-xl opacity-80"
          alt=""
        />
      </div>
      <div
        className={`absolute bottom-20 right-50 bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]`}
      >
        <div
          className={`h-120 w-260 rounded-lg bg-black flex ${
            isSubmitting ? "justify-center" : "justify-between"
          }`}
        >
          <DotLoader
            className="self-center"
            color="#fff"
            loading={isSubmitting}
            size={150}
          />

          {!isSubmitting && (
            <>
              <div className="text-5xl border-r-1 flex-1/3 p-10 font-bold">
                <p>Add Your Temple For Listing-</p>
              </div>
              <div className="flex-2/3">
                <form
                  className="flex flex-col gap-5 h-full p-4"
                  onSubmit={onSubmitHandler}
                >
                  <div className="w-full">
                    <Label htmlFor="templeName" className="text-2xl">
                      Name
                    </Label>
                    <input
                      type="text"
                      id="templeName"
                      className="p-9 mt-3 w-full bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-xl"
                      value={formData.templeName}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          templeName: e.target.value,
                        });
                      }}
                      required
                      placeholder="Enter Temple Name"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="templeName" className="text-2xl">
                      Address
                    </Label>
                    <input
                      type="text"
                      id="address"
                      className="p-9 mt-3 w-full bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-xl"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                      }}
                      required
                      placeholder="Enter Temple Address"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-auto p-3 rounded-lg text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 cursor-pointer
                      hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black hover:font-bold transition-colors duration-300"
                    >
                      Add Temple
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
