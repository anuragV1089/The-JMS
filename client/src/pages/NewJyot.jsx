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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NewJyot() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-6 bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]">
        <Card className="text-3xl w-5xl bg-black text-white px-12 pt-16 pb-10 text-center h-130 flex justify-center">
          <CardHeader>
            <CardTitle className="text-5xl">Create New Jyot</CardTitle>
            <CardDescription className="text-2xl mb-4">
              Enter the person on whose name the jyot should be dedicated.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex gap-8 flex-col ">
              <div className="flex w-full justify-between items-center gap-6">
                <div className="grid gap-3 w-full">
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
                <div className="w-fit h-fit p-[2px] bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-lg mt-10">
                  <Select>
                    <SelectTrigger className="w-44 p-8 text-2xl !text-white border-0 bg-black">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white text-2xl">
                      <SelectGroup>
                        <SelectItem
                          className="text-2xl focus:bg-gradient-to-r focus:from-violet-500 focus:via-red-600 focus:to-yellow-500 focus:text-black focus:font-bold"
                          value="oil"
                        >
                          Oil
                        </SelectItem>
                        <SelectItem
                          className="text-2xl focus:bg-gradient-to-r focus:from-violet-500 focus:via-red-600 focus:to-yellow-500 focus:text-black focus:font-bold"
                          value="ghee"
                        >
                          Ghee
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <Button
                  type="submit"
                  className="w-50 p-6 text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500"
                >
                  Move to Payment
                </Button>
              </div>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
