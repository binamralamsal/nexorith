"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

interface BlurIntProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({
  children,
  className,
  variant,
  duration = 1,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
