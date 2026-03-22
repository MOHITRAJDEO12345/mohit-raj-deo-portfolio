import { MouseEvent, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface GlassCardProps extends PropsWithChildren {
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "cyan" | "violet" | "amber" | "default";
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className, 
  hoverEffect = false,
  glowColor = "default",
  onClick 
}: GlassCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth 3D tilt
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to card (0 to 1)
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX);
    y.set(mouseY);

    if (hoverEffect) {
      // Calculate rotation based on center of card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const maxRotation = 8; // Max degrees of tilt
      
      const rotateXVal = ((mouseY - centerY) / centerY) * -maxRotation;
      const rotateYVal = ((mouseX - centerX) / centerX) * maxRotation;
      
      rotateX.set(rotateXVal);
      rotateY.set(rotateYVal);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    if (hoverEffect) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }

  const glowColors = {
    cyan: "rgba(0, 240, 255, 0.15)",
    violet: "rgba(139, 92, 246, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    default: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: hoverEffect ? rotateX : 0,
        rotateY: hoverEffect ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={cn(
        "glass-card p-6 rounded-2xl relative overflow-hidden transition-all duration-300",
        hoverEffect && "interactive border border-white/10 hover:border-white/20",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* 3D Inner Layer for Parallax Effect */}
      <div style={{ transform: hoverEffect ? "translateZ(30px)" : "none" }} className="w-full h-full relative z-10">
        {children}
      </div>

      {/* Mouse Tracking Glow Effect */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${x}px ${y}px,
                ${glowColors[glowColor]},
                transparent 80%
              )
            `,
          }}
        />
      )}
    </motion.div>
  );
}
