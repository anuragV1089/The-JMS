import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import BentoGridVideo from "@/components/BentoGridVideo";
import vid from "../assets/video1.mp4";
import { JyotCard } from "@/components/JyotCard";
import JyotCardShow from "@/components/JyotCardShow";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 via-red-600 to-yellow-500"></div>
);
const Img = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 via-red-600 to-yellow-500">
    <img src="" alt="" />
  </div>
);
const items = [
  {
    title: "Connecting Religion and Tech",
    description: "Worship from afar.",
    header: <BentoGridVideo src={vid} />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "This Navratri Light up your Jyots.",
    description:
      "We connect you to temples. Your jyot connects you to Devi Maa.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Add your temples.",
    description: "Serve the Bhakts.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Locate you jyot.",
    description: "Your bhakti guides you, we just show you the doors.",
    header: (
      <div className="flex justify-center w-full">
        <JyotCardShow />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  let navigate = useNavigate();
  const onClickHandler = (e) => {
    navigate("/temples");
  };
  return (
    <div>
      <div className="bg-black opacity-95 text-white flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-3xl">India's First</p>
          <h1 className="text-7xl">JYOT MANAGEMENT SYSTEM</h1>
          <p className="text-xl w-3xl text-balance text-center">
            Illuminate Your Devotion Digitally. Experience the spiritual glow of
            your Akhand Jyot burning at the temple when you visit.
          </p>
          <Button
            className="cursor-pointer"
            onClick={(e) => {
              onClickHandler(e);
            }}
          >
            Light Up!
          </Button>
        </div>
      </div>
      <div className="mb-20">
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[30rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
