"use client";
import Image from "next/image";
import { motion } from "motion/react";
import placeHolderImage from "../../public/placeholder.jpg";
import { TextAnimate } from "../text-animate";
import { AutoTextSize } from "auto-text-size";

export default function NameTitle() {
  return (
    <div className="w-full">
      {/* Mobile layout: stacked rows */}
      <div className="flex flex-col gap-2 sm:hidden">
        {/* Row 1: BRANDON QUON */}
        <div className="h-fit">
          <AutoTextSize maxFontSizePx={400} mode="oneline">
            <p className="font-bold tracking-tight">BRANDON QUON</p>
          </AutoTextSize>
        </div>

        {/* Row 2: Image only */}

        <div className="w-full h-[150px] relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.25,
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
            }}
            className="w-full h-full"
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={placeHolderImage}
              alt="Your Image"
            />
          </motion.div>
        </div>
      </div>

      {/* Desktop layout: single row (sm and up) */}
      <div className="hidden sm:grid grid-cols-[auto_1fr_auto] items-center">
        <TextAnimate
          once
          startOnView={false}
          delay={0.5}
          by="character"
          duration={0.35}
          className="text-[clamp(3rem,10vw,16rem)] font-bold tracking-tight flex-shrink flex-grow"
        >
          BRANDON
        </TextAnimate>
        <div className="relative w-[95%] ml-[2.55%] h-[clamp(2.25rem,7.1vw,11.3125rem)]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.25,
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 0.8,
            }}
            className="w-full h-full"
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={placeHolderImage}
              alt="Your Image"
            />
          </motion.div>
        </div>
        <TextAnimate
          once
          startOnView={false}
          delay={0.8}
          by="character"
          duration={0.35}
          className="text-[clamp(3rem,10vw,16rem)] font-bold tracking-tight flex-shrink flex-grow"
        >
          QUON
        </TextAnimate>
      </div>
    </div>
  );
}
