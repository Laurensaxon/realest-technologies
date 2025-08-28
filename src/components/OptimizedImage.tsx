import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { LoadingSkeleton } from './ui/loading-skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  placeholder = '/placeholder.svg',
  priority = false,
  sizes = "100vw",
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/lovable-uploads/')) {
      return {
        webp: originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
        fallback: originalSrc
      };
    }
    return { webp: originalSrc, fallback: originalSrc };
  };

  const { webp, fallback } = getOptimizedSrc(src);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !hasError && (
        <LoadingSkeleton className="absolute inset-0" />
      )}
      
      {isInView && (
        <picture>
          <source 
            srcSet={webp} 
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={hasError ? placeholder : fallback}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            sizes={sizes}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;