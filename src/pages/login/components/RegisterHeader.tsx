
import React from "react";

interface RegisterHeaderProps {
  logoSrc: string;
  title: string;
  subtitle: string;
}

export function RegisterHeader({ logoSrc, title, subtitle }: RegisterHeaderProps) {
  return (
    <div className="text-center">
      <img 
        src={logoSrc} 
        alt="PMI Logo" 
        className="mx-auto h-24 w-auto"
      />
      <h2 className="mt-6 text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
