
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  date?: string;
  category?: string;
  className?: string;
}

export function ContentCard({
  title,
  description,
  image,
  link,
  date,
  category,
  className
}: ContentCardProps) {
  const CardContent = () => (
    <>
      <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        />
        {category && (
          <div className="absolute top-3 right-3 bg-brand-600 text-white py-1 px-3 rounded-full text-xs font-medium">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        {date && (
          <p className="text-sm text-gray-500 mb-2">{date}</p>
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {link && (
          <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700">
            <span>Daha Fazla</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group hover:shadow-xl",
      className
    )}>
      {link ? (
        <Link to={link} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
}
