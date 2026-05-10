"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "amber";
  hover?: boolean;
}

export default function GlowCard({
  children,
  className,
  glowColor = "purple",
  hover = true,
}: GlowCardProps) {
  const glowStyles = {
    purple: "hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-accent/30",
    cyan: "hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-accent-2/30",
    amber: "hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:border-accent-3/30",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "glass rounded-2xl border border-white/7 transition-all duration-300",
        hover && glowStyles[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
