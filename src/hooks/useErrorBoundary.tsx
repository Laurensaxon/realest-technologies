import { useState, useCallback } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  component?: string;
}

export const useErrorBoundary = () => {
  const [error, setError] = useState<ErrorInfo | null>(null);

  const captureError = useCallback((error: Error, component?: string) => {
    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date(),
      component
    };
    
    setError(errorInfo);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorInfo);
    }
    
    // In production, you could send to error tracking service
    // trackError(errorInfo);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const retry = useCallback(() => {
    clearError();
    window.location.reload();
  }, [clearError]);

  return {
    error,
    captureError,
    clearError,
    retry
  };
};