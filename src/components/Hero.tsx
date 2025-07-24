import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();
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
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-4 hover:bg-white/20 transition-all duration-300 cursor-default">
              🚀 Professional Technology Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Rendering Impeccable
            <span className="block text-brand-orange bg-gradient-to-r from-brand-orange to-yellow-400 bg-clip-text text-transparent animate-pulse-glow">
              Technologies
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Your trusted partner for cutting-edge technology solutions in Nakuru and beyond. 
            From web development to drone services, we bring innovation to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-2xl hover:shadow-3xl btn-glow transition-all duration-300 hover:scale-110 group" 
              onClick={() => navigate('/services')}
            >
              <span className="group-hover:animate-wiggle">Explore Our Services</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group" 
              onClick={() => navigate('/about')}
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-brand-orange mb-1 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:animate-bounce-in">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-orange/10 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-brand-green/10 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-brand-red/10 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-yellow-400/10 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;