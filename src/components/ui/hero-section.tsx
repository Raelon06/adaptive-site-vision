
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  className
}: HeroSectionProps) {
  const bgStyle = backgroundImage ? 
    { backgroundImage: `url(${backgroundImage})` } : 
    {};

  return (
    <div 
      className={cn(
        "relative py-24 md:py-32 bg-gradient-to-r from-brand-600 to-brand-800 bg-cover bg-center text-white",
        className
      )} 
      style={bgStyle}
    >
      {/* Overlay if background image exists */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-gray-100">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
