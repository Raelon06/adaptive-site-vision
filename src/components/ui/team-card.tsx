
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div 
        className="team-image" 
        style={{ "--aspect-ratio": aspectRatio } as React.CSSProperties}
      >
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-brand-600 mb-3">{title}</p>
        {description && (
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
        )}
        
        {socials && (
          <div className="flex space-x-3 mt-3">
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
