import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import api from "../lib/axiosApi";
import toast from "react-hot-toast";
import img from "../assets/temple.png";
import { useNavigate } from "react-router-dom";

interface JyotCardProps extends React.ComponentProps<"div"> {
  name: string;
  type: string;
  _id: string;
  litAt: string;
  number: number;
  isAdmin: boolean;
  isOwner: boolean;
  isEditing: boolean;
}

type TokenType = {
  _id: string;
  name: string;
  type: number;
  litAt: string;
  litBy: number;
};

export function JyotCard({
  className,
  _id,
  name,
  type,
  number,
  litAt,
  isAdmin,
  isOwner,
  isEditing,
  ...props
}: JyotCardProps) {
  const [editedName, setEditedName] = useState("");
  const navigate = useNavigate();
  const { setTokens, setEditingTokenId } = useContext(TokenContext);

  async function handleSubmit() {
    try {
      const response = await api.post(`tokens/${_id}/edit`, {
        name: editedName,
      });
      if (response) {
        setEditingTokenId("");
      }
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    isEditing = false;
  }
  async function handleDelete() {
    try {
      let response = await api.delete(`/tokens/${_id}`);
      if (response) {
        setTokens((currTokens: TokenType[]) => {
          return currTokens.filter((token: TokenType) => token._id !== _id);
        });
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]",
        className
      )}
      {...props}
    >
      <Card className="bg-black text-white p-5 h-auto min-h-full flex flex-col justify-around contain-content">
        <CardHeader>
          {isEditing ? (
            <>
              <input
                type="text"
                className="p-9 mt-3 w-full bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-xl"
                value={editedName}
                onChange={(e) => {
                  setEditedName(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                placeholder="Enter name"
              />
            </>
          ) : (
            <CardTitle className="text-4xl mb-4 flex justify-between">
              <p>{name}</p>
              <img
                onClick={() => {
                  navigate(`/temples/${litAt}`);
                }}
                src={img}
                className="w-8 h-8 cursor-pointer hover:w-10"
              ></img>
            </CardTitle>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 px-5">
            <div className="flex justify-between">
              <p className="text-1xl">Type</p>
              <p className="text-center">Number</p>
            </div>
            <div className="flex justify-between">
              <p className="text-3xl font-bold text-center">{type}</p>
              <p className="text-3xl font-bold">{number}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-5 justify-center">
            {(isOwner || isAdmin) && !isEditing ? (
              <>
                <Button
                  onClick={() => {
                    setEditingTokenId(_id);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={handleDelete}>Delete</Button>
              </>
            ) : null}
            {isEditing ? <Button onClick={handleSubmit}>Submit</Button> : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
