import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
  glowColor?: "cyan" | "violet" | "amber" | "default";
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  glowColor = "default",
  ...props
}: GlassCardProps) {
  const glowVariants = {
    default: "hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    cyan: "hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
    violet: "hover:border-accent-violet/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
    amber: "hover:border-accent-amber/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "glass-card-hover",
        hoverEffect && glowVariants[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
