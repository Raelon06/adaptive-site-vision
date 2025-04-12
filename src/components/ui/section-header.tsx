
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
