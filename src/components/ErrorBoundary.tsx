import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-destructive mb-4">Oops!</h1>
            <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact our support team.
            </p>
            <div className="space-y-4">
              <Button 
                onClick={() => window.location.reload()} 
                variant="default"
                className="w-full"
              >
                Refresh Page
              </Button>
              <Button 
                onClick={() => window.location.href = '/'} 
                variant="outline"
                className="w-full"
              >
                Go Home
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;