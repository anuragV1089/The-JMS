import { JyotCard } from "@/components/JyotCard";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api, { getAccessToken } from "../lib/axiosApi";
import toast from "react-hot-toast";

export default function AllJyots() {
  let [tokens, setTokens] = useState([
    {
      name: "Anurag",
      type: "Oil",
      number: 205,
    },
  ]);
  const { accessToken } = useAuth();
  useEffect(() => {
    getAccessToken(accessToken);
    getAllTokens();
  }, []);

  const getAllTokens = async () => {
    try {
      const tokenData = await api.get("/tokens");
      if (tokenData) {
        setTokens([...tokenData.data]);
      } else {
        toast.error(`You're unauthorized!`);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="text-white">
      <div className="py-30 flex flex-col items-center">
        <p className="text-7xl w-150 text-center mb-8">All Registered Jyots</p>
        <div className="flex gap-5 justify-center">
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.2041 62.2958L53.4765 48.5625C57.5925 43.1988 59.5141 36.4704 58.8516 29.742C58.1891 23.0137 54.9921 16.7892 49.9091 12.3313C44.826 7.87348 38.2376 5.51601 31.4803 5.73716C24.723 5.95831 18.3029 8.74152 13.5222 13.5222C8.74152 18.3029 5.95831 24.723 5.73716 31.4803C5.51601 38.2376 7.87348 44.826 12.3313 49.9091C16.7892 54.9921 23.0137 58.1891 29.742 58.8516C36.4704 59.5141 43.1988 57.5925 48.5625 53.4765L62.3016 67.2186C62.6243 67.5412 63.0073 67.7972 63.4289 67.9718C63.8505 68.1464 64.3023 68.2363 64.7586 68.2363C65.215 68.2363 65.6668 68.1464 66.0884 67.9718C66.51 67.7972 66.893 67.5412 67.2157 67.2186C67.5383 66.8959 67.7943 66.5128 67.9689 66.0913C68.1435 65.6697 68.2334 65.2178 68.2334 64.7615C68.2334 64.3052 68.1435 63.8534 67.9689 63.4318C67.7943 63.0102 67.5383 62.6272 67.2157 62.3045L67.2041 62.2958ZM12.7187 32.375C12.7187 28.4873 13.8715 24.687 16.0314 21.4545C18.1913 18.2221 21.2611 15.7027 24.8528 14.215C28.4446 12.7272 32.3968 12.338 36.2097 13.0964C40.0227 13.8549 43.5251 15.7269 46.274 18.4759C49.023 21.2249 50.8951 24.7273 51.6535 28.5402C52.412 32.3532 52.0227 36.3054 50.535 39.8971C49.0472 43.4888 46.5279 46.5587 43.2954 48.7185C40.0629 50.8784 36.2626 52.0312 32.375 52.0312C27.1635 52.0259 22.1669 49.9532 18.4818 46.2681C14.7967 42.583 12.7241 37.5865 12.7187 32.375Z"
              fill="url(#paint0_linear_34_718)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_34_718"
                x1="5.7229"
                y1="36.9796"
                x2="68.2334"
                y2="36.9796"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#833AB4" stop-opacity="0.87" />
                <stop offset="0.5" stop-color="#FD1D1D" stop-opacity="0.9" />
                <stop offset="1" stop-color="#FCB045" />
              </linearGradient>
            </defs>
          </svg>

          <div className="bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[1px]">
            <Input
              id="name"
              type="text"
              className="p-9 bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-xl"
              placeholder="Enter Name"
              required
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
        {tokens.map((token, idx) => (
          <JyotCard
            key={idx}
            className="w-auto"
            name={token.name}
            type={token.type}
            number={token.number}
          />
        ))}
      </div>
    </div>
  );
}
