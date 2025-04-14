
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectImage } from "./aspect-image";

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
  aspectRatio?: number;
  buttonText?: string;
  date?: string;       // Added date property
  category?: string;   // Added category property
}

export function ContentCard({
  title,
  description,
  image,
  link,
  className,
  aspectRatio = 16/9,
  buttonText = "Detaylar",
  date,           // Added date parameter
  category        // Added category parameter
}: ContentCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <AspectImage
        src={image}
        alt={title}
        aspectRatio={aspectRatio}
      />
      <CardContent className="p-6">
        {/* Display category if provided */}
        {category && (
          <span className="text-xs font-medium text-brand-600 bg-brand-50 rounded-full px-2.5 py-0.5 mb-2 inline-block">
            {category}
          </span>
        )}
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {/* Display date if provided */}
        {date && (
          <div className="flex items-center text-sm text-muted-foreground mt-3">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full group">
          <Link to={link} className="flex items-center justify-between">
            <span>{buttonText}</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
