import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 scroll-smooth">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-orange/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-brand-green/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-brand-orange/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-brand-green/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-brand-orange/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
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
            <span className="inline-block px-4 py-2 backdrop-blur-sm rounded-full text-sm font-medium mb-4 bg-background/10 border border-foreground/20 text-white">
              🚀 Technology Solutions for Everyone in Nakuru
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight animate-fade-in">
            Your Friendly
            <span className="block text-brand-orange bg-gradient-to-r from-brand-orange to-yellow-400 bg-clip-text text-transparent animate-glow-orange">
              Tech Shop
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            From phone repairs to websites, WiFi setup to M-Pesa integration - we solve all your tech problems at affordable prices in Nakuru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Button variant="hero" size="lg" className="group text-lg px-8 py-4 shadow-2xl hover:shadow-premium transform hover:scale-105 transition-all duration-500 hover:animate-glow font-semibold" onClick={() => navigate('/services')}>
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="glass" size="lg" className="text-lg px-8 py-4 shadow-xl backdrop-blur-md text-white font-medium hover:shadow-glow-orange" onClick={() => navigate('/about')}>
              <Play className="mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1 group-hover:animate-glow-orange font-heading">500+</div>
              <div className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Happy Customers</div>
            </div>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1 group-hover:animate-glow-orange font-heading">KES 5K+</div>
              <div className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Starting Prices</div>
            </div>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1 group-hover:animate-glow-orange font-heading">24/7</div>
              <div className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Support Available</div>
            </div>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1 group-hover:animate-glow-orange font-heading">5+</div>
              <div className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 backdrop-blur-sm rounded-full animate-float bg-background/5" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-orange/10 backdrop-blur-sm rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-brand-green/10 backdrop-blur-sm rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-brand-red/5 backdrop-blur-sm rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-1/3 left-3/4 w-14 h-14 bg-brand-green/5 backdrop-blur-sm rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default Hero;