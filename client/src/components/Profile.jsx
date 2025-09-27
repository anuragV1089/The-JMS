import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import img from "../assets/profilePic.jpg";

export default function Profile(props) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      const data = await logout();
      navigate(`/`);
      props.setShowProfile(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={props.ref} className="mt-30 h-100 w-110">
      <div className="bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px] h-full">
        <div className=" h-full relative rounded-xl text-white bg-[#1b1b1b] flex flex-col items-center justify-around gap-6 p-8">
          <div className="h-30 w-30 rounded-full overflow-hidden">
            <img
              src={img}
              className="rounded-full object-fit transform scale-125"
              alt=""
            />
          </div>
          <div className="flex gap-2 w-full justify-evenly">
            <Button
              className="flex-1/2"
              onClick={() => {
                navigate(`/${user._id}/jyots`);
              }}
            >
              Your Jyots
            </Button>
            {user && user.adminOf ? (
              <Button
                className="flex-1/2"
                onClick={() => {
                  navigate(`/temples/${user.adminOf}`);
                }}
              >
                Your Temple
              </Button>
            ) : null}
          </div>
          <div className="w-full">
            <Button onClick={handleLogout}>Log Out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
