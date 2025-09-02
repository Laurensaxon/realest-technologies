import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Camera, 
  Laptop, 
  Plane, 
  Wifi, 
  Cpu, 
  Users, 
  ArrowRight,
  CheckCircle,
  Wrench
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Simple Websites & Facebook Pages",
    description: "Get your business online with affordable websites and professional Facebook business pages. Perfect for shops, salons, and small businesses.",
    features: ["Business Website", "Facebook Page Setup", "WhatsApp Integration", "Basic SEO"],
    color: "bg-brand-green"
  },
  {
    icon: Laptop,
    title: "Phone & Computer Repair",
    description: "Quick and affordable repair services for smartphones, tablets, and computers. Same-day service for most issues.",
    features: ["Screen Replacement", "Virus Removal", "Data Recovery", "Software Issues"],
    color: "bg-brand-orange"
  },
  {
    icon: Wifi,
    title: "Internet & WiFi Setup",
    description: "Get reliable internet at home or business. We help you choose the best package and set everything up.",
    features: ["Safaricom Fiber", "Airtel Setup", "WiFi Configuration", "Speed Testing"],
    color: "bg-brand-green"
  },
  {
    icon: Camera,
    title: "Home & Shop Security Cameras",
    description: "Protect your home, shop, or business with affordable CCTV cameras you can watch from your phone.",
    features: ["Mobile Viewing", "Night Vision", "Motion Alerts", "Cloud Storage"],
    color: "bg-brand-red"
  },
  {
    icon: Users,
    title: "M-Pesa Business Solutions",
    description: "Accept M-Pesa payments at your shop with simple POS systems and payment integration for your business.",
    features: ["M-Pesa Integration", "Payment Tracking", "Daily Reports", "Customer Receipts"],
    color: "bg-primary"
  },
  {
    icon: Wrench,
    title: "Appliance Repair & Maintenance",
    description: "Fix your home appliances - fridges, microwaves, TVs, and more. Affordable repairs with genuine parts.",
    features: ["Fridge Repair", "TV Fixing", "Microwave Service", "Home Appliances"],
    color: "bg-brand-red"
  },
  {
    icon: CheckCircle,
    title: "Home Electrical & Wiring",
    description: "Safe electrical installations for your home. Power points, lighting, and electrical problem solving.",
    features: ["Power Points", "Home Wiring", "Lighting Setup", "Electrical Safety"],
    color: "bg-brand-green"
  },
  {
    icon: Laptop,
    title: "Computer Training & Classes",
    description: "Learn basic computer skills, Microsoft Office, and internet use. Perfect for students and professionals.",
    features: ["Basic Computer", "Microsoft Office", "Internet Skills", "Typing Classes"],
    color: "bg-brand-orange"
  },
  {
    icon: Plane,
    title: "Photography & Video Services",
    description: "Professional photos and videos for events, weddings, and business using our drone and camera equipment.",
    features: ["Event Photography", "Aerial Shots", "Wedding Videos", "Business Photos"],
    color: "bg-brand-red"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const { ref: sectionRef, isInView } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/5 to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold border border-brand-green/20 hover:bg-brand-green/20 transition-all duration-300">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 max-w-3xl mx-auto bg-gradient-to-r from-primary via-brand-green to-brand-orange bg-clip-text text-transparent">
            Tech Solutions for Everyone
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Affordable technology services for homes, shops, students, and small businesses in Nakuru and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-premium transition-all duration-700 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white/95 hover:scale-[1.02] ${
                isInView ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-glow`}>
                  <service.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs px-2 py-1 font-medium">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                    onClick={() => {
                      const serviceSlug = service.title
                        .toLowerCase()
                        .replace(/&/g, 'and')
                        .replace(/[^a-z0-9\s]/g, '')
                        .replace(/\s+/g, '-');
                      navigate(`/service/${serviceSlug}`);
                    }}
                  >
                    Details
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate('/contact')}
                  >
                    Quote
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-orange/5 rounded-3xl p-8 lg:p-12 border border-brand-green/10">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">Need Help With Technology?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Visit our shop in Nakuru or call us for free advice. We're here to help you with any tech problem, big or small.
            </p>
            <Button variant="hero" size="lg" className="shadow-xl hover:shadow-2xl" onClick={() => navigate('/contact')}>
              <Users className="mr-2" />
              Get Free Help & Advice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;