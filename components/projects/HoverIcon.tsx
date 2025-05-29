"use client";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

interface HoverIconProps {
  isHovering: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hoveredProject: any;
  onClick: (projectNumber: string) => void;
}

export default function HoverIcon({
  isHovering,
  hoveredProject,
  onClick,
}: HoverIconProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.08,
        y: prev.y + (mousePos.y - prev.y) * 0.08,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <motion.div
      onClick={() => onClick(hoveredProject)}
      animate={{
        x: cursorPos.x,
        y: cursorPos.y,
        scale: isHovering ? 1 : 0,
        opacity: isHovering ? 1 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
        y: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
        scale: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: isHovering ? 0.3 : 0.2,
        },
        opacity: {
          duration: isHovering ? 0.2 : 0.15,
          ease: isHovering ? "easeOut" : "easeIn",
        },
      }}
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 cursor-pointer w-[80px] h-[80px] bg-black rounded-full flex justify-center items-center z-10 pointer-events-none"
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="rotate-45"
        size="2x"
        color="white"
      />
    </motion.div>
  );
}
