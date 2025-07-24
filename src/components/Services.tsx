import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold border border-brand-green/20">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 max-w-3xl mx-auto">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From concept to completion, we deliver innovative technology solutions that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
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
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium"
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-orange/5 rounded-3xl p-8 lg:p-12 border border-brand-green/10">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">Need IT Consultancy?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our expert team provides comprehensive IT consultancy services to help optimize your technology infrastructure and drive digital transformation
            </p>
            <Button variant="hero" size="lg" className="shadow-xl hover:shadow-2xl" onClick={() => navigate('/contact')}>
              <Users className="mr-2" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;