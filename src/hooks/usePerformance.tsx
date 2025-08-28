import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export const usePerformance = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as any).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as any).value;
            }
            break;
          case 'navigation':
            const navigationEntry = entry as PerformanceNavigationTiming;
            metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            break;
        }
      });
      
      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
      
      // Send to analytics in production
      if (window.gtag && Object.keys(metrics).length > 0) {
        window.gtag('event', 'web_vitals', {
          custom_map: metrics,
          ...metrics
        });
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      try {
        observer.observe({ entryTypes: ['paint', 'navigation'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }

    return () => observer.disconnect();
  }, []);

  const measurePageLoad = useCallback(() => {
    if (typeof window === 'undefined') return;

    const loadTime = performance.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    }
    
    return loadTime;
  }, []);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    const slowResources = resources.filter(resource => 
      resource.duration > 1000 // Resources taking more than 1 second
    );
    
    if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('Slow loading resources:', slowResources);
    }
    
    return { total: resources.length, slow: slowResources.length };
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    measurePageLoad();
    
    // Measure resource timing after page load
    setTimeout(measureResourceTiming, 1000);
    
    return cleanup;
  }, [measurePerformance, measurePageLoad, measureResourceTiming]);

  return {
    measurePerformance,
    measurePageLoad,
    measureResourceTiming
  };
};