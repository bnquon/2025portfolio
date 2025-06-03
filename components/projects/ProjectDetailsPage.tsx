"use client";
import { useEffect } from "react";
import Image from "next/image";
import { DATA } from "../../data/data";
import PageContainer from "../PageContainer";
import { lora } from "@/app/fonts";
import BackToHome from "./BackToHome";

interface ProjectDetailsPageProps {
  projectNumber: string;
}

export default function ProjectDetailsPage({
  projectNumber,
}: ProjectDetailsPageProps) {
  const project = DATA.projects.find((p) => p.projectNumber === projectNumber);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Record mapping project fields to display labels
  const fieldLabels: Record<string, string> = {
    type: "Type",
    link: "Link",
    dateFinished: "Date",
    techStack: "Tech",
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  // Convert tech stack to array if it's a string
  const techArray =
    typeof project.techStack === "string"
      ? project.techStack.split(", ")
      : project.techStack;

  return (
    <PageContainer paddingTop="sm:pt-32 pt-28">
      <div className="flex w-full border-b-[1px] border-[#d5d5d5] font-semibold 2xl:mb-16 text-xl 2xl:pb-8 pb-8 mb-8">
        <p>{project.title}</p>
      </div>

      <div className="flex sm:flex-row-reverse flex-col w-full">
        <div className="flex flex-col sm:w-1/2 w-full relative p-6 gap-3 sm:p-20 sm:gap-10 bg-black">
          <Image
            width={1200}
            height={800}
            src="/sfueamock1.webp"
            alt="Project Image 1"
            className="w-full h-auto"
          />
          <Image
            width={1500}
            height={1000}
            src="/sfueamock2.webp"
            alt="Project Image 2"
            className="w-full h-auto"
          />
        </div>

        <div className="sm:w-1/2 w-full flex flex-col 2xl:pr-8 sm:pr-4 sm:mt-0 mt-8">
          <div className="flex flex-col gap-8">
            {Object.entries(fieldLabels).map(([key, label]) => {
              const value = project[key as keyof typeof project];
              if (!value) return null;
              return (
                <div
                  key={key}
                  className="flex w-full border-b-[1px] border-[#d5d5d5] pb-8"
                >
                  <div className="w-1/2">
                    <p className="font-semibold text-xl">{label}</p>
                  </div>
                  <div className="w-1/2 uppercase text-xl text-[#868686]">
                    {key === "link" ? (
                      <a
                        href={value as string}
                        className="underline text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value as string}
                      </a>
                    ) : key === "techStack" ? (
                      <div className="flex flex-col">
                        {techArray.map((tech: string, index: number) => (
                          <p key={index}>{tech.trim()}</p>
                        ))}
                      </div>
                    ) : (
                      <p>{value as string}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="2xl:text-4xl sm:text-3xl sm:leading-[34px] 2xl:leading-10 text-2xl leading-[28px] 2xl:my-20 sm:my-16 my-8">
            <p className={`${lora.className}`}>{project.fullDescription}</p>
          </div>
          <BackToHome />
        </div>
      </div>
    </PageContainer>
  );
}