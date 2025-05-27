"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface ResumeCardProps {
  logoUrl: string;
  companyName: string;
  date: string;
  role: string;
  description: string;
}

export default function ResumeCard({
  logoUrl,
  companyName,
  date,
  role,
  description,
}: ResumeCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[1fr_7fr]">
      {/* Company Logo */}
      <div className="relative h-[80px] w-[80px]">
        <Image
          layout="fill"
          objectFit="contain"
          src={logoUrl}
          alt="Your Image"
        />
      </div>
      <div className="flex flex-col">
        {/* Company Name and Date */}
        <div className="flex justify-between">
          <div>
            <span className="text-xl font-semibold">{companyName}</span>
            <FontAwesomeIcon
              onClick={() => setIsExpanded(!isExpanded)}
              className={clsx("ml-2 cursor-pointer", isExpanded ? "rotate-90" : "")}
              icon={faChevronRight}
              size="1x"
              color="black"
            />
          </div>
          <p className="text-gray-500">{date}</p>
        </div>
        {/* Role */}
        <p>{role}</p>
        {/* Description IF expanded */}
        {isExpanded ? (
          <div className="mt-2">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
