"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface HoverIconProps {
  onClick: () => void;
  isHovering: boolean;
}

export default function HoverIcon({ onClick, isHovering }: HoverIconProps) {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const springConfig = { damping: 30, stiffness: 400, mass: 1.25 };
  const springMouse = {
    x: useSpring(mouse.x, springConfig),
    y: useSpring(mouse.y, springConfig),
  };

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
    };
    
    if (isHovering) {
      window.addEventListener("mousemove", manageMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovering, mouse.x, mouse.y]);

  if (!isHovering) {
    return null;
  }

  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      style={{
        x: springMouse.x,
        y: springMouse.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 cursor-pointer w-[80px] h-[80px] bg-black rounded-full flex justify-center items-center z-10"
    >
      <FontAwesomeIcon
        onClick={onClick}
        icon={faArrowUp}
        className="rotate-45"
        size="2x"
        color="white"
      />
    </motion.div>
  );
}
