
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
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
}

export function ContentCard({
  title,
  description,
  image,
  link,
  className,
  aspectRatio = 16/9,
  buttonText = "Detaylar"
}: ContentCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <AspectImage
        src={image}
        alt={title}
        aspectRatio={aspectRatio}
      />
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
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
