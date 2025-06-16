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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-black text-white px-12 pt-16 pb-10 text-center h-165">
        <CardHeader>
          <CardTitle className="text-5xl">Login to your account</CardTitle>
          <CardDescription className="text-2xl">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
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
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
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
