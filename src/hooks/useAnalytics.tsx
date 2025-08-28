import { useCallback } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

interface PageViewEvent {
  page: string;
  title?: string;
  properties?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, {
        custom_map: event.properties,
        ...event.properties
      });
    }
    
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }, []);

  const trackPageView = useCallback((event: PageViewEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: event.title,
        page_location: window.location.href,
        page_path: event.page,
        ...event.properties
      });
    }
    
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', event);
    }
  }, []);

  const trackContactFormSubmit = useCallback((source: string) => {
    trackEvent({
      name: 'contact_form_submit',
      properties: {
        source,
        timestamp: new Date().toISOString()
      }
    });
  }, [trackEvent]);

  const trackServiceInterest = useCallback((service: string) => {
    trackEvent({
      name: 'service_interest',
      properties: {
        service,
        timestamp: new Date().toISOString()
      }
    });
  }, [trackEvent]);

  const trackBlogInteraction = useCallback((action: string, postId?: string | number) => {
    trackEvent({
      name: 'blog_interaction',
      properties: {
        action,
        post_id: postId,
        timestamp: new Date().toISOString()
      }
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackContactFormSubmit,
    trackServiceInterest,
    trackBlogInteraction
  };
};

// Global gtag type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}