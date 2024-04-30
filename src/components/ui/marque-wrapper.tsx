import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import Marquee from "./marquee";
import Link from "next/link";

type Roadmap = {
  title: string;
  views: string;
  time: string;
  id: string;
};

const roadmaps: Roadmap[] = [
  {
    title: "Frontend",
    views: "1300",
    time: "15m ago",
    id: "lvi1ykpn0001b4cu7f42hcnf",
  },
  {
    title: "Backend",
    views: "1750",
    time: "20m ago",
    id: "clvkwbjq9000cb4mtzlrn8g4l",
  },
  {
    title: "DevOps",
    views: "1425",
    time: "25m ago",
    id: "clvkwrh0w000e5lokqt3lvrvt",
  },
  {
    title: "Machine Learning",
    views: "1885",
    time: "10m ago",
    id: "clvkwem0a000ib4mt7xq2cgki",
  },
  {
    title: "Data Science",
    views: "1555",
    time: "30m ago",
    id: "clvkwsyuq000h5lok3z5tuslt",
  },
  {
    title: "Mobile Development",
    views: "1670",
    time: "40m ago",
    id: "clvkwuf9p000k5lokbxd0dluq",
  },
  {
    title: "Web Development",
    views: "1950",
    time: "5m ago",
    id: "clvkx1r23000w5lokse4gtwke",
  },
  {
    title: "UI/UX Design",
    views: "1450",
    time: "35m ago",
    id: "clvkwxthq000o5lok5envge9l",
  },
];

const firstRow = roadmaps.slice(0, roadmaps.length / 2);
const secondRow = roadmaps.slice(roadmaps.length / 2);

const ReviewCard = ({ title, views, time, id }: Roadmap) => {
  return (
    <Link href={`/roadmap/${id}`} prefetch={false}>
      <figure
        className={cn(
          "relative w-48 sm:w-64 cursor-pointer overflow-hidden rounded border-2 border-[#000000a6] p-2 shadow-[6px_6px_0px_1px_#000000a6] flex flex-col justify-between h-20"
        )}
      >
        <p className="font-semibold">{title}</p>
        <div className="flex justify-between text-xs text-slate-500">
          <div className="flex gap-1 items-center">
            <Eye size={14} />
            {views}
          </div>
          <span>{time}</span>
        </div>
      </figure>
    </Link>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-2xl mx-auto max-w-screen-xl">
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {firstRow.map((review) => (
          <ReviewCard key={review.time} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] w-full">
        {secondRow.map((review) => (
          <ReviewCard key={review.time} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 md:w-1/3 w-[60px] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 md:w-1/3 w-[60px] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
