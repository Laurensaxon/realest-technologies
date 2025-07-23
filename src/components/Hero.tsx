import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/70 to-brand-orange/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rendering Impeccable
            <span className="block text-brand-orange">Technologies</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your trusted partner for cutting-edge technology solutions, from web development to drone services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Explore Our Services
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button variant="glass" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-brand-orange">100+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-orange">50+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-orange">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-orange">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-orange/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-brand-green/20 rounded-full animate-ping"></div>
    </section>
  );
};

export default Hero;