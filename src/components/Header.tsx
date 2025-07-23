import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b6e04550-d39f-454a-b17c-0bbfa4c78c66.png" 
              alt="Realest Technologies Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">Realest</h1>
              <p className="text-sm text-brand-red -mt-1 font-medium">Technologies</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0769925907" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>0769 925 907</span>
            </a>
            <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')}>Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors text-left">Contact</button>
              <a href="tel:0769925907" className="flex items-center space-x-2 text-sm pt-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>0769 925 907</span>
              </a>
              <Button variant="hero" size="sm" className="w-fit" onClick={() => scrollToSection('contact')}>Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;