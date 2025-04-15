
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface AspectImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  fallbackSrc?: string;
}

export function AspectImage({
  src,
  alt,
  aspectRatio = 16 / 9,
  className,
  objectFit = "cover",
  fallbackSrc = "/placeholder.svg",
}: AspectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setIsError(true);
    }
  };

  return (
    <AspectRatio ratio={aspectRatio} className={cn("overflow-hidden rounded-md", className)}>
      <img
        src={imgSrc}
        alt={alt}
        className={cn(
          "h-full w-full transition-all duration-300", 
          objectFit === "cover" ? "object-cover" : 
          objectFit === "contain" ? "object-contain" :
          objectFit === "fill" ? "object-fill" :
          objectFit === "none" ? "object-none" : "object-scale-down"
        )}
        onError={handleError}
        loading="lazy"
      />
    </AspectRatio>
  );
}
