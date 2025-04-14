
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
  className?: string;
  textColor?: "light" | "dark";
  height?: "small" | "medium" | "large" | "full";
  overlay?: "none" | "light" | "dark" | "gradient";
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  className,
  textColor = "light",
  height = "medium",
  overlay = "gradient"
}: HeroSectionProps) {
  const heightClass = 
    height === "small" ? "min-h-[40vh]" : 
    height === "medium" ? "min-h-[60vh]" : 
    height === "large" ? "min-h-[80vh]" : 
    "min-h-screen";

  const overlayClass = 
    overlay === "none" ? "" : 
    overlay === "light" ? "bg-white/70" : 
    overlay === "dark" ? "bg-black/60" : 
    "bg-gradient-to-r from-black/70 to-black/40";

  const textClass = 
    textColor === "light" ? "text-white" : "text-gray-900";

  return (
    <section 
      className={cn(
        "relative flex items-center justify-center bg-cover bg-center", 
        heightClass,
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={cn("absolute inset-0", overlayClass)} />
      <div className="container relative z-10 mx-auto px-4 text-center animate-fade-in">
        <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-4", textClass)}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn("text-xl md:text-2xl max-w-3xl mx-auto mb-8", textClass)}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
