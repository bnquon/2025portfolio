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
      className="flex sm:flex-row flex-col sm:gap-0 gap-4 sm:pb-0 pb-8 relative border-b-[1px] border-[#d5d5d5]"
    >
      {/* Number and tech stack */}
      <div className="flex sm:w-1/2 sm:flex-row flex-col sm:gap-0 gap-4">
        <span className="2xl:text-2xl sm:text-xl text-lg">{projectNumber}</span>
        <div className="w-full relative flex sm:justify-center">
          <span className="block 2xl:max-w-[33%] sm:max-w-[66%] 2xl:text-2xl sm:text-xl">
            {techStack}
          </span>
        </div>
      </div>

      {/* Description and image */}
      <div className="sm:w-1/2 relative flex flex-col gap-4 sm:grid 2xl:grid-cols-[5fr_3fr] sm:grid-cols-[6fr_5fr] 2xl:gap-32 sm:gap-12 h-[360px]">
        <span
          className={clsx(
            lora.className,
            "2xl:text-4xl sm:text-3xl sm:leading-[34px] 2xl:leading-10 text-2xl leading-[26px]"
          )}
        >
          {description}
        </span>
        <div className="relative w-full 2xl:h-[65%] sm:h-[50%] h-[100%]">
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
