import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Track 404 errors for analytics (remove console.error for production)
    if (process.env.NODE_ENV === 'development') {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/')} 
            variant="default"
            className="w-full"
            size="lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Go to Homepage
          </Button>
          
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline"
            className="w-full"
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Contact our support team:
          </p>
          <div className="space-y-2">
            <a 
              href="tel:+254769925907" 
              className="text-primary hover:underline block"
              aria-label="Call us at 0769 925 907"
            >
              📞 0769 925 907
            </a>
            <a 
              href="mailto:realest.technologies@gmail.com" 
              className="text-primary hover:underline block"
              aria-label="Email us at realest.technologies@gmail.com"
            >
              ✉️ realest.technologies@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
