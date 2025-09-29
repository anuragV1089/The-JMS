import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../lib/axiosApi";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { TempleCard } from "@/components/TempleCard";
import { useNavigate } from "react-router-dom";

export default function AllTemples() {
  let [temples, setTemples] = useState([{}]);

  useEffect(() => {
    getAllTemples();
  }, []);

  const getAllTemples = async () => {
    try {
      const templeData = await api.get("/temples");
      if (templeData) {
        setTemples([...templeData.data]);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onClickHandler = (e, { id }) => {
    const navigate = useNavigate();
    navigate(`/temples/${id}`);
  };

  return (
    <div className="mt-40 items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10">
      {temples &&
        temples.map((temple, idx) => (
          <TempleCard
            key={idx}
            className="w-auto"
            name={temple.templeName}
            address={temple.address}
            admin={temple.admin}
            id={temple._id}
            onClickHandler={onClickHandler}
          />
        ))}
    </div>
  );
}
