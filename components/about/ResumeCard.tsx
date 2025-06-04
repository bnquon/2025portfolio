"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeCardProps {
  logoUrl: string;
  companyName: string;
  date: string;
  role: string;
  description: string[];
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
    <div className="grid grid-cols-[1fr_7fr] sm:gap-0 gap-3">
      {/* Company Logo */}
      <div className="relative 2xl:h-[80px] 2xl:w-[80px] sm:h-[60px] sm:w-[60px] w-[50px] h-[50px]">
        <Image fill className="object-cover" src={logoUrl} alt={`${companyName} logo`} />
      </div>
      <div className="flex flex-col">
        {/* Company Name and Date */}
        <div className="flex sm:flex-row flex-col justify-between">
          <div>
            <span className="sm:text-xl font-semibold text-base">
              {companyName}
            </span>
            <motion.div
              className="inline-block ml-2 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                color="black"
                className="sm:text-lg text-sm"
              />
            </motion.div>
          </div>
          <p className="text-gray-500 sm:text-base text-sm">{date}</p>
        </div>
        {/* Role */}
        <p className="sm:text-base text-sm">{role}</p>
        {/* Description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <ul className="sm:text-base text-sm list-disc list-inside space-y-1">
                {description.map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
