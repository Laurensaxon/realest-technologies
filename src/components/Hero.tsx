import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/85 to-brand-orange/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4">
              🚀 Professional Technology Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Rendering Impeccable
            <span className="block text-brand-orange bg-gradient-to-r from-brand-orange to-yellow-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Your trusted partner for cutting-edge technology solutions in Nakuru and beyond. 
            From web development to drone services, we bring innovation to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300" onClick={() => scrollToSection('services')}>
              Explore Our Services
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button variant="glass" size="lg" className="text-lg px-8 py-4 shadow-xl" onClick={() => scrollToSection('about')}>
              <Play className="mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1">100+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1">50+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1">5+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-orange/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-brand-green/10 rounded-full animate-ping"></div>
    </section>
  );
};

export default Hero;