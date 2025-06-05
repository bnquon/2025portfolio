"use client";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

interface HoverIconProps {
  isHovering: boolean;
}

export default function HoverIcon({ isHovering }: HoverIconProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
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
      animate={{
        x: cursorPos.x,
        y: cursorPos.y,
        scale: isHovering ? (isPressed ? 0.92 : 1) : 0,
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
      className="fixed top-0 left-0 cursor-pointer 2xl:w-[80px] 2xl:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center z-10 pointer-events-none"
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="rotate-45 2xl:text-4xl sm:text-2xl text-xl"
        color="white"
      />
    </motion.div>
  );
}
