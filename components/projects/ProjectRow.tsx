import { lora } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectsRowProps {
  projectNumber: string;
  techStack: string;
  summary: string;
  previewUrl: string;
}

export default function ProjectsRow({
  projectNumber,
  techStack,
  summary,
  previewUrl,
}: ProjectsRowProps) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to project details page with project number in URL
    // Remove parentheses from project number for cleaner URL
    const cleanProjectNumber = projectNumber.replace(/[()]/g, "");
    router.push(`/projects/${cleanProjectNumber}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex sm:flex-row flex-col sm:gap-0 gap-4 py-12 sm:pb-6 pb-8 relative border-b-[1px] border-[#d5d5d5] cursor-pointer"
    >
      {/* Number and tech stack */}
      <div className="flex sm:w-1/2 sm:flex-row flex-col sm:gap-0 gap-4">
        <span className="2xl:text-2xl sm:text-xl text-lg">{projectNumber}</span>
        <div className="w-full relative flex sm:justify-center">
          <span className="block 2xl:max-w-[45%] sm:max-w-[66%] 2xl:text-2xl sm:text-xl">
            {techStack}
          </span>
        </div>
      </div>
      {/* Description and image */}
      <div className="sm:w-1/2 relative flex flex-col gap-4 sm:grid 2xl:grid-cols-[5fr_3fr] sm:grid-cols-[6fr_5fr] 2xl:gap-32 sm:gap-12">
        <span
          className={clsx(
            lora.className,
            "2xl:text-4xl text-2xl 2xl:leading-[48px] leading-[32px]"
          )}
        >
          {summary}
        </span>
        <div className="relative w-full 2xl:h-[65%] sm:h-[50%] h-[250px]">
          <Image
            fill
            className="object-cover"
            src={previewUrl}
            alt={`Project ${projectNumber}`}
          />
        </div>
      </div>
    </div>
  );
}
