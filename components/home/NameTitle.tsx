"use client";
import Image from "next/image";
import { motion } from "motion/react";
import placeHolderImage from "../../public/placeholder.jpg";
import { TextAnimate } from "../text-animate";

export default function NameTitle() {
  return (
    <div className="grid w-full grid-cols-[auto_1fr_auto] items-center">
      <TextAnimate once startOnView={false} delay={0.5} by="character" duration={0.35} className="text-[256px] font-bold tracking-tight">
        BRANDON
      </TextAnimate>
      
      <div className="relative w-full h-[181px] mt-[0px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.25,
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.8
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
      
      <TextAnimate once startOnView={false} delay={0.8} by="character" duration={0.35} className="text-[256px] font-bold tracking-tight">
        QUON
      </TextAnimate>
    </div>
  );
}