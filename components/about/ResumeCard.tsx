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
      <div className="relative 2xl:h-[80px] 2xl:w-[80px] sm:h-[60px] sm:w-[60px]">
        <Image
          layout="fill"
          objectFit="contain"
          src={logoUrl}
          alt="Company Logo"
        />
      </div>
      <div className="flex flex-col">
        {/* Company Name and Date */}
        <div className="flex justify-between">
          <div>
            <span className="text-xl font-semibold">{companyName}</span>
            <motion.div
              className="inline-block ml-2 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="1x"
                color="black"
              />
            </motion.div>
          </div>
          <p className="text-gray-500">{date}</p>
        </div>
        {/* Role */}
        <p>{role}</p>
        {/* Description with smooth animation */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ overflow: "hidden" }}
            >
              <p>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
