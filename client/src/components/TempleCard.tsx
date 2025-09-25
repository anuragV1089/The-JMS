import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface TempleCardProps extends React.ComponentProps<"div"> {
  id: string;
  name: string;
  address: string;
  admin: string;
}

export function TempleCard({
  className,
  id,
  name,
  address,
  admin,
  ...props
}: TempleCardProps) {
  const navigate = useNavigate();
  function onClickHandlerView() {
    navigate(`/temples/${id}`);
  }
  function onClickHandlerLit() {
    navigate(`/jyots/${id}/new`);
  }
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px]",
        className
      )}
      {...props}
    >
      <Card className="bg-black text-white p-8 h-80 flex">
        <CardHeader>
          <CardTitle className="text-4xl mb-4">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-1xl">Address</p>
            </div>
            <div className="flex justify-between w-auto">
              <p className="text-3xl font-bold text-left">{address}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-5 justify-center">
            <Button
              onClick={() => {
                onClickHandlerLit();
              }}
            >
              Lit Jyot
            </Button>
            <Button
              onClick={() => {
                onClickHandlerView();
              }}
            >
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
