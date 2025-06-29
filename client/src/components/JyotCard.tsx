import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JyotCardProps extends React.ComponentProps<"div"> {
  name?: string;
  type?: string;
  number?: number;
}

export function JyotCard({
  className,
  name,
  type,
  number,
  ...props
}: JyotCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]",
        className
      )}
      {...props}
    >
      <Card className="bg-black text-white p-8 h-75 flex">
        <CardHeader>
          <CardTitle className="text-4xl mb-4">{name}</CardTitle>
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
            <Button
              type="submit"
              className="w-35 p-6 text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black hover:font-bold transition-colors duration-300"
            >
              Edit
            </Button>
            <Button
              type="submit"
              className="w-35 p-6 text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black hover:font-bold transition-colors duration-300"
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
