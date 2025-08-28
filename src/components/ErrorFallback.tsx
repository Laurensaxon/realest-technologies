import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ErrorFallbackProps {
  error?: {
    message: string;
    component?: string;
  };
  onRetry?: () => void;
  onReport?: () => void;
}

export function ErrorFallback({ error, onRetry, onReport }: ErrorFallbackProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-xl">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            {error?.message || "An unexpected error occurred. Please try again."}
          </p>
          
          {error?.component && (
            <p className="text-sm text-muted-foreground text-center">
              Component: {error.component}
            </p>
          )}
          
          <div className="flex gap-2 justify-center">
            {onRetry && (
              <Button 
                onClick={onRetry}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            )}
            
            {onReport && (
              <Button 
                onClick={onReport}
                variant="secondary"
                size="sm"
              >
                Report Issue
              </Button>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            If this problem persists, please contact our support team.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}