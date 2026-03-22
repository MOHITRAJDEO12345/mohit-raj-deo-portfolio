"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundElements() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax effects for background nodes
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const rotateEffect = useTransform(scrollYProgress, [0, 1], [0, 90]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 grid-overlay opacity-20" 
        style={{ 
          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 80%)", 
          maskImage: "radial-gradient(circle at center, black 0%, transparent 80%)" 
        }}
      />

      {/* Floating 3D Nodes - Side Elements to make it feel "Alive" */}
      <div className="absolute inset-0 z-0">
        {/* Left Side Floating Nodes */}
        <motion.div 
          style={{ y: y1, rotate: rotateEffect, perspective: 1000 }}
          className="absolute top-[15%] -left-32 w-80 h-80 opacity-20 hidden lg:block"
        >
          <div className="w-full h-full border-2 border-accent-cyan/20 rounded-2xl rotate-45 animate-[pulse_4s_easeInOut_infinite]" />
          <div className="absolute inset-8 border border-accent-violet/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-16 border border-accent-cyan/10 rounded-lg -rotate-12" />
        </motion.div>

        <motion.div 
          style={{ y: y2, perspective: 1000 }}
          className="absolute top-[55%] -left-16 w-56 h-56 opacity-10 hidden lg:block"
        >
          <div className="w-full h-full border border-accent-amber/20 rounded-full animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-4 border border-accent-amber/10 rounded-full animate-[pulse_3s_easeInOut_infinite]" />
        </motion.div>

        {/* Right Side Floating Nodes */}
        <motion.div 
          style={{ y: y3, rotate: rotateEffect, perspective: 1000 }}
          className="absolute top-[25%] -right-32 w-96 h-96 opacity-15 hidden lg:block"
        >
          <div className="w-full h-full border-2 border-accent-violet/10 rounded-[3rem] -rotate-12 animate-[pulse_6s_easeInOut_infinite]" />
          <div className="absolute inset-12 border border-accent-cyan/20 rounded-2xl rotate-45" />
          <div className="absolute inset-24 border border-accent-violet/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
        </motion.div>

        <motion.div 
          style={{ y: y1, perspective: 1000 }}
          className="absolute top-[75%] -right-20 w-48 h-48 opacity-10 hidden lg:block"
        >
          <div className="w-full h-full border border-accent-cyan/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
          <div className="absolute inset-2 border border-accent-cyan/5 rounded-full" />
        </motion.div>
      </div>

      {/* Ambient Particle Stream (Subtle) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-accent-cyan/40 rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0.1 
            }}
            animate={{ 
              y: [null, "-15%"],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Dynamic Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-accent-cyan/5 blur-[150px] rounded-full animate-[pulse_10s_easeInOut_infinite]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-accent-violet/5 blur-[150px] rounded-full animate-[pulse_8s_easeInOut_infinite_reverse]" />
      </div>

      {/* Scanline Effect Overlay (Very subtle) */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02] scanline" />
    </div>
  );
}
