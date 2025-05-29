import { lora } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";

interface ProjectsRowProps {
  projectNumber: string;
  techStack: string;
  description: string;
  imageUrl: string;
  onHover: () => void;
  onLeave: () => void;
  onClick: (projectNumber: string) => void;
}

export default function ProjectsRow({
  projectNumber,
  techStack,
  description,
  imageUrl,
  onHover,
  onLeave,
  onClick,
}: ProjectsRowProps) {
const handleClick = () => {
    // Call the passed onClick function with project data
    onClick(projectNumber);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex relative border-b-[1px] border-[#d5d5d5]"
    >
      {/* Number and tech stack */}
      <div className="flex w-1/2">
        <span className="text-2xl">{projectNumber}</span>
        <div className="w-full relative flex justify-center">
          <span className="block max-w-[33%] text-2xl">{techStack}</span>
        </div>
      </div>

      {/* Description and image */}
      <div className="w-1/2 relative grid grid-cols-[5fr_3fr] gap-32 h-[360px]">
        <span className={clsx(lora.className, "text-4xl")}>{description}</span>
        <div className="relative w-full h-[65%]">
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt={`Project ${projectNumber}`}
          />
        </div>
      </div>
    </div>
  );
}
