import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px] mt-20">
        {" "}
        <Card className="bg-black text-white p-10 text-center flex justify-evenly h-160 max-w-150">
          <CardHeader>
            <CardTitle className="text-5xl">Login</CardTitle>
            <CardDescription className="text-2xl mb-4">
              Enter your username and password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-8 flex-col">
              <div className="grid grid-cols-1 w-full gap-6">
                <div className="grid gap-3">
                  <Label className="text-2xl pl-3" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    className="p-9 w-auto bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Label className="text-2xl pl-3" htmlFor="name">
                  Password
                </Label>
                <Input
                  className="p-9 w-auto bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Button
                  type="submit"
                  className="w-50 p-6 text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500"
                >
                  Log In
                </Button>
              </div>

              <div className="mt-2 text-center text-md">
                Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
