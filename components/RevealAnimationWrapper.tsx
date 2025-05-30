'use client';
import { motion } from 'motion/react';
import React from 'react';

interface RevealAnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export default function RevealAnimationWrapper({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
}: RevealAnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}