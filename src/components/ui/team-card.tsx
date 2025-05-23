
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { AspectImage } from './aspect-image';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
  description?: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  className?: string;
  aspectRatio?: string;
}

export function TeamCard({
  name,
  title,
  image,
  description,
  socials,
  className,
  aspectRatio = "3/4"
}: TeamCardProps) {
  // Convert string ratio like "3/4" to number like 0.75
  const ratioNumber = (): number => {
    if (!aspectRatio.includes('/')) return 3/4;
    const [numerator, denominator] = aspectRatio.split('/').map(Number);
    return numerator / denominator;
  };

  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <AspectImage 
        src={image}
        alt={name}
        aspectRatio={ratioNumber()}
        objectFit="cover"
      />
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-brand-600 mb-3">{title}</p>
        {description && (
          <p className="text-gray-600 mb-4 text-sm whitespace-pre-line">{description}</p>
        )}
        
        {socials && (
          <div className="flex space-x-3 mt-3 bg-white">
            {socials.linkedin && (
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {socials.twitter && (
              <a 
                href={socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {socials.instagram && (
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            )}
            {socials.facebook && (
              <a 
                href={socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
