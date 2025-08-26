import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Zap } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    category: "Web Development",
    description: "Built a comprehensive online marketplace with advanced features including inventory management, secure payment processing, and responsive design.",
    image: "/lovable-uploads/07a8d482-974a-4028-a3f7-b52aa4f8a30f.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Zap,
    completion: "2024"
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Developed a secure banking app with biometric authentication, real-time notifications, and AI-powered financial insights.",
    image: "/lovable-uploads/529749b1-eccb-4a24-8db1-a32ef07b0e6d.png",
    tech: ["React Native", "Firebase", "Blockchain", "AI"],
    icon: Zap,
    completion: "2024"
  },
  {
    id: 3,
    title: "IoT Smart City Platform",
    category: "IoT Development",
    description: "Created a comprehensive smart city management system with real-time monitoring, traffic optimization, and environmental sensors.",
    image: "/lovable-uploads/606431b9-b638-4ca8-a1f4-3bd2dedf6a3e.png",
    tech: ["Python", "IoT", "Machine Learning", "Cloud"],
    icon: Zap,
    completion: "2023"
  },
  {
    id: 4,
    title: "Enterprise Security System",
    category: "Security Solutions",
    description: "Implemented a comprehensive security solution with IP cameras, access control, and real-time monitoring dashboard.",
    image: "/lovable-uploads/b6e04550-d39f-454a-b17c-0bbfa4c78c66.png",
    tech: ["IP Cameras", "Access Control", "Dashboard", "Analytics"],
    icon: Zap,
    completion: "2023"
  }
];

const Portfolio = () => {
  const { ref: elementRef, isInView: isVisible } = useIntersectionObserver();
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-blue to-brand-orange bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise through successful project implementations across various technology domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`group overflow-hidden bg-white/80 backdrop-blur-sm shadow-elegant hover:shadow-premium border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/90 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white border-0 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
                    {item.completion}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  onClick={() => navigate(`/case-study/${item.id}`)}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-elegant">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether it's web development, mobile apps, IoT solutions, or security systems - 
              we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/contact')}
                className="hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
                className="hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;