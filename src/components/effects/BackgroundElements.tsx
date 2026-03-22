"use client";

import { motion } from "framer-motion";

export function BackgroundElements({ variant = "default" }: { variant?: "default" | "about" | "experience" | "projects" | "skills" | "credentials" | "contact" }) {
  // We can vary the orbs based on the page variant
  const getOrbs = () => {
    switch (variant) {
      case "about":
        return (
          <motion.div
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      case "experience":
        return (
          <motion.div
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent-amber/20 rounded-full blur-[100px] pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      case "projects":
        return (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[100px] pointer-events-none"
              animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none"
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        );
      default:
        // Default "Mission Control" or base generic
        return (
          <>
            <motion.div
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent-cyan/20 rounded-full blur-[120px] pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, 20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-accent-violet/15 rounded-full blur-[150px] pointer-events-none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                y: [0, -30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      {getOrbs()}
    </div>
  );
}
