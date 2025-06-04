"use client";
import { useEffect } from "react";
import Image from "next/image";
import { DATA } from "../../data/data";
import PageContainer from "../PageContainer";
import { lora } from "@/app/fonts";
import BackToHome from "./BackToHome";
import RevealAnimationWrapper from "../RevealAnimationWrapper";

interface ProjectDetailsPageProps {
  projectNumber: string;
}

export default function ProjectDetailsPage({
  projectNumber,
}: ProjectDetailsPageProps) {
  const project = DATA.projects.find((p) => p.projectNumber === projectNumber);

  // Scroll to top when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
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
      <RevealAnimationWrapper delay={0.5} duration={0.5}>
        <div className="flex w-full border-b-[1px] border-[#d5d5d5] font-semibold 2xl:mb-16 sm:text-2xl text-lg 2xl:pb-8 pb-8 mb-8">
          <p>{project.title}</p>
        </div>
      </RevealAnimationWrapper>

      <RevealAnimationWrapper delay={1} duration={0.5} distance={50}>
        <div className="flex sm:flex-row-reverse flex-col w-full">
          <div className="flex flex-col sm:w-1/2 w-full relative p-6 gap-3 sm:p-20 sm:gap-10 bg-black h-fit">
            {project.mockUpImages.map((image, index) => (
              <Image
                key={index}
                width={1200}
                height={800}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto"
                priority
              />
            ))}
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
                      <p className="font-semibold sm:text-xl text-base">{label}</p>
                    </div>
                    <div className="w-1/2 uppercase sm:text-xl text-base text-[#868686]">
                      {key === "link" ? (
                        <a
                          href={value as string}
                          className="underline text-black"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
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

            <div className="2xl:text-4xl sm:text-3xl 2xl:leading-[48px] text-2xl sm:leading-[40px] leading-[32px] 2xl:my-20 sm:my-16 my-8">
              <p className={`${lora.className}`}>{project.fullDescription}</p>
            </div>
            <BackToHome />
          </div>
        </div>
      </RevealAnimationWrapper>
    </PageContainer>
  );
}
