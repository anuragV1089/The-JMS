import { useEffect, useState } from "react";
import api from "../lib/axiosApi";
import { useNavigate, useParams } from "react-router-dom";
import { JyotCard } from "@/components/JyotCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { TokenProvider } from "../context/TokenContext";
import toast from "react-hot-toast";

export default function Temple() {
  const navigate = useNavigate();
  const { user, checkAuthStatus } = useAuth();
  const [temple, setTemple] = useState({});
  const [tokens, setTokens] = useState([{}]);
  const [editingTokenId, setEditingTokenId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getTempleData();
  }, [editingTokenId]);
  const getTempleData = async () => {
    try {
      const response = await api.get(`/temples/${id}`);
      if (response) {
        checkAuthStatus();
        setTemple(response.data);
        setTokens(response.data.tokens);
      }
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.message);
    }
  };

  function onClickHandlerLit() {
    navigate(`/jyots/${id}/new`);
  }

  return (
    <div className="flex justify-center mt-20 min-h-screen text-white">
      <div className="flex flex-col gap-6 min-h-130 w-7xl bg-black rounded-xl p-8">
        <p className="text-5xl font-bold">{temple.templeName}</p>
        <div className="h-70 w-full rounded-lg bg-amber-500"></div>
        <div className="flex justify-between items-center">
          <p className="text-4xl text-left flex-4/5">{temple.address}</p>
          <Button
            className="flex-1/5"
            onClick={() => {
              onClickHandlerLit();
            }}
          >
            Lit Jyot
          </Button>
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10">
          <TokenProvider
            value={{ tokens, setTokens, editingTokenId, setEditingTokenId }}
          >
            {tokens &&
              tokens.map((token, idx) => (
                <JyotCard
                  key={idx}
                  className="w-auto"
                  _id={token._id}
                  name={token.name}
                  type={token.type}
                  number={token.number}
                  litAt={token.litAt}
                  isAdmin={temple.admin === user._id}
                  isOwner={token.litBy === user._id}
                  isEditing={editingTokenId === token._id}
                />
              ))}
          </TokenProvider>
        </div>
      </div>
    </div>
  );
}
