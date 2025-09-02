import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-soft transition-all duration-300 hover:bg-white/98 hover:shadow-elegant">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b6e04550-d39f-454a-b17c-0bbfa4c78c66.png" 
              alt="Realest Technologies Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="transition-all duration-300">
              <h1 className="text-xl font-heading font-bold text-primary hover:text-brand-green-light transition-colors duration-300">Realest</h1>
              <p className="text-sm text-brand-red -mt-1 font-medium hover:text-brand-red-light transition-colors duration-300">Technologies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage('/')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => navigateToPage('/services')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/services') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => navigateToPage('/pricing')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/pricing') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Pricing
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/pricing') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => navigateToPage('/about')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => navigateToPage('/blog')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/blog') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Blog
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => navigateToPage('/contact')} 
              className={`transition-all duration-300 font-medium relative group hover:scale-105 ${isActivePage('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-brand-orange transition-all duration-500 ${isActivePage('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+254769925907" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors" aria-label="Call us at 0769 925 907">
              <Phone className="w-4 h-4 text-primary" />
              <span>0769 925 907</span>
            </a>
            <Button variant="hero" size="sm" className="hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold" onClick={() => navigateToPage('/contact')}>Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-background/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" id="mobile-navigation">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <button onClick={() => navigateToPage('/')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">Home</button>
              <button onClick={() => navigateToPage('/services')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">Services</button>
              <button onClick={() => navigateToPage('/pricing')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">Pricing</button>
              <button onClick={() => navigateToPage('/about')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">About</button>
              <button onClick={() => navigateToPage('/blog')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">Blog</button>
              <button onClick={() => navigateToPage('/contact')} className="text-foreground hover:text-primary transition-colors text-left py-2 px-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary">Contact</button>
              <a href="tel:+254769925907" className="flex items-center space-x-2 text-sm pt-2 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-background/80" aria-label="Call us at 0769 925 907">
                <Phone className="w-4 h-4 text-primary" />
                <span>0769 925 907</span>
              </a>
              <Button variant="hero" size="sm" className="w-fit" onClick={() => navigateToPage('/contact')}>Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;