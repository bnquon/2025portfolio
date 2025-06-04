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
      {/* Number and description */}
      <div className="flex sm:w-1/2 sm:flex-row flex-col sm:gap-0 gap-4">
        <span className="2xl:text-2xl sm:text-xl text-lg">{projectNumber}</span>
        <div className="sm:w-[90%] w-full ml-auto relative flex flex-col gap-8">
          <span
            className={clsx(
              lora.className,
              "2xl:text-4xl xl:text-3xl text-2xl 2xl:leading-[48px] xl:leading-[40px] leading-[32px]"
            )}
          >
            {summary}
          </span>
          <span className="2xl:text-2xl text-lg">
            {techStack}
          </span>
        </div>
      </div>
      {/* Tech stack and image */}
      <div className="sm:w-1/2 relative flex justify-end gap-4">
        <div className="relative sm:w-[60%] max-w-[450px]">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            src={previewUrl}
            alt={`Project ${projectNumber}`}
          />
        </div>
      </div>
    </div>
  );
}
