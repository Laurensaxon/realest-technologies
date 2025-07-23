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
    title: "Business Websites & Multi Platform Applications",
    description: "Professional web development, e-commerce platforms, and cross-platform mobile applications tailored to your business needs.",
    features: ["Responsive Design", "E-commerce", "Mobile Apps", "SEO Optimized"],
    color: "bg-brand-green"
  },
  {
    icon: Camera,
    title: "CCTV & IP Camera Sales Installation Services",
    description: "Complete security surveillance systems with HD cameras, remote monitoring, and professional installation services.",
    features: ["HD Surveillance", "Remote Monitoring", "Night Vision", "Cloud Storage"],
    color: "bg-brand-red"
  },
  {
    icon: Laptop,
    title: "Laptops & Desktop Sales & Assembly",
    description: "Quality computer hardware sales, custom PC builds, and comprehensive servicing and acquisition advisory.",
    features: ["Custom Builds", "Gaming PCs", "Business Laptops", "Tech Support"],
    color: "bg-brand-orange"
  },
  {
    icon: Wifi,
    title: "WiFi Installation & Maintenance",
    description: "Professional network setup, WiFi optimization, and comprehensive maintenance services for homes and businesses.",
    features: ["Network Setup", "WiFi Optimization", "Security Config", "24/7 Support"],
    color: "bg-brand-green"
  },
  {
    icon: Plane,
    title: "Unmanned Aerial Vehicles Design & Maintenance",
    description: "Custom drone design, maintenance services, aerial photography, and comprehensive UAV solutions.",
    features: ["Aerial Photography", "Mapping", "Inspections", "Custom Drones"],
    color: "bg-brand-red"
  },
  {
    icon: Cpu,
    title: "Printed Circuit Boards Design & Development",
    description: "Professional PCB design, prototyping, and development services for electronic projects and custom solutions.",
    features: ["Custom Design", "Prototyping", "Testing", "Mass Production"],
    color: "bg-brand-orange"
  },
  {
    icon: Users,
    title: "Point of Sale Design & Development",
    description: "Custom POS systems design and development for retail businesses and commercial establishments.",
    features: ["Custom POS", "Inventory Management", "Payment Integration", "Reporting"],
    color: "bg-primary"
  },
  {
    icon: CheckCircle,
    title: "Electrical Installations",
    description: "Professional electrical services including consumer wiring, electrical fencing, and complete installations.",
    features: ["Consumer Wiring", "Electrical Fencing", "Safety Systems", "Maintenance"],
    color: "bg-brand-green"
  },
  {
    icon: Wrench,
    title: "Electroservicing",
    description: "Comprehensive repair and maintenance services for refrigerators, microwaves, blenders, cookers and other appliances.",
    features: ["Appliance Repair", "Maintenance", "Parts Replacement", "Diagnostics"],
    color: "bg-brand-red"
  }
];

const Services = () => {
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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to empower your business and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Need IT Consultancy?</h3>
          <p className="text-muted-foreground mb-6">
            Our expert team provides comprehensive IT consultancy services to help optimize your technology infrastructure
          </p>
          <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')}>
            <Users className="mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;