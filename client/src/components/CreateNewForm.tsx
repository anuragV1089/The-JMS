import { cn } from "@/lib/utils";
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

export function CreateNewForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]",
        className
      )}
      {...props}
    >
      <Card className="bg-black text-white px-12 pt-16 pb-10 text-center h-130 flex justify-center">
        <CardHeader>
          <CardTitle className="text-5xl">Create New Jyot</CardTitle>
          <CardDescription className="text-2xl mb-4">
            Enter the person on whose name the jyot should be dedicated.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-8">
            <div className="grid gap-3">
              <Label className="text-2xl pl-3" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                className="p-9 bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl"
                placeholder="Enter Name"
                required
              />
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
  );
}
