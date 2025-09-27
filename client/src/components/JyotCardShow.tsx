import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import img from "../assets/temple.png";

export default function JyotCardShow({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px] max-w-80",
        className
      )}
      {...props}
    >
      <Card className="bg-black text-white p-5 h-auto min-h-full flex flex-col justify-around contain-content">
        <CardHeader>
          <CardTitle className="text-4xl mb-4 flex justify-between">
            <p>Anurag Verma</p>
            <img src={img} className="w-8 h-8 cursor-pointer hover:w-10"></img>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 px-5">
            <div className="flex justify-between">
              <p className="text-1xl">Type</p>
              <p className="text-center">Number</p>
            </div>
            <div className="flex justify-between">
              <p className="text-3xl font-bold text-center">Oil</p>
              <p className="text-3xl font-bold">18</p>
            </div>
          </div>
          <div className="mt-4 flex gap-5 justify-center">
            <>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
