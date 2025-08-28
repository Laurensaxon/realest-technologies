import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "default" | "circular" | "text";
  count?: number;
}

export function LoadingSkeleton({ 
  className, 
  variant = "default", 
  count = 1 
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-muted";
  
  const variantClasses = {
    default: "rounded-md",
    circular: "rounded-full",
    text: "rounded h-4"
  };

  const elements = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    />
  ));

  return count === 1 ? elements[0] : <>{elements}</>;
}

// Blog post card skeleton
export function BlogPostSkeleton() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant border border-white/20">
      <LoadingSkeleton className="w-full h-48" />
      <div className="p-6 space-y-4">
        <LoadingSkeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <LoadingSkeleton className="h-4 w-full" />
          <LoadingSkeleton className="h-4 w-2/3" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LoadingSkeleton variant="circular" className="w-4 h-4" />
            <LoadingSkeleton className="h-3 w-20" />
          </div>
          <LoadingSkeleton className="h-3 w-16" />
        </div>
        <LoadingSkeleton className="h-9 w-full" />
      </div>
    </div>
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <div className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-brand-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <LoadingSkeleton className="h-16 w-3/4 mx-auto" />
          <LoadingSkeleton className="h-6 w-2/3 mx-auto" />
          <div className="max-w-2xl mx-auto space-y-4">
            <LoadingSkeleton className="h-12 w-full" />
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from({ length: 6 }, (_, i) => (
                <LoadingSkeleton key={i} className="h-8 w-20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}