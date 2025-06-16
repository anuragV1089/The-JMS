import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-black opacity-95 text-white flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center min-h-140 justify-center">
        <p className="text-3xl">India's First</p>
        <h1 className="text-7xl">JYOT MANAGEMENT SYSTEM</h1>
        <p className="text-xl w-3xl text-balance text-center">
          Illuminate Your Devotion Digitally. Experience the spiritual glow of
          your Akhand Jyot burning at the temple when you visit.
        </p>
        <Button className="text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 p-6 px-8 rounded-lg font-bold">
          Light Up!
        </Button>
      </div>
    </div>
  );
}
