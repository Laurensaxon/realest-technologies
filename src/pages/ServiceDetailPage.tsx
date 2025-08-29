import { useParams, useNavigate } from "react-router-dom";
import { usePageSEO } from "@/hooks/usePageSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, Camera, Laptop, Plane, Wifi, Cpu, Users, CheckCircle, Wrench,
  ArrowRight, Check, Star, Clock, Shield, Zap
} from "lucide-react";

const serviceDetails = {
  "web-development": {
    title: "Business Websites & Multi Platform Applications",
    icon: Globe,
    description: "Professional web development, e-commerce platforms, and cross-platform mobile applications tailored to your business needs.",
    longDescription: "Transform your business with cutting-edge web applications and mobile solutions. Our team specializes in creating responsive, user-friendly websites and cross-platform mobile applications that drive engagement and growth.",
    features: [
      "Responsive Web Design",
      "E-commerce Platforms", 
      "Mobile Applications",
      "SEO Optimization",
      "Content Management Systems",
      "Payment Gateway Integration",
      "API Development",
      "Progressive Web Apps"
    ],
    benefits: [
      "Increased online visibility",
      "Better customer engagement", 
      "Mobile-first approach",
      "Scalable architecture"
    ],
    packages: [
      {
        name: "Basic Website",
        price: "$299-599",
        features: ["5-page website", "Contact forms", "Mobile responsive", "Basic SEO"]
      },
      {
        name: "E-commerce Store", 
        price: "$799-1499",
        features: ["Product catalog", "Shopping cart", "Payment integration", "Inventory management"]
      },
      {
        name: "Custom Web App",
        price: "$1500+",
        features: ["Custom functionality", "User authentication", "Database integration", "Admin dashboard"]
      }
    ],
    timeline: "2-8 weeks",
    support: "3 months included"
  },
  "cctv-installation": {
    title: "CCTV & IP Camera Sales Installation Services",
    icon: Camera,
    description: "Complete security surveillance systems with HD cameras, remote monitoring, and professional installation services.",
    longDescription: "Secure your property with our comprehensive CCTV solutions. We provide end-to-end security camera systems from consultation and design to installation and ongoing maintenance.",
    features: [
      "HD/4K Camera Systems",
      "Night Vision Technology",
      "Remote Monitoring",
      "Cloud Storage Options",
      "Motion Detection",
      "Mobile App Access",
      "Professional Installation",
      "Maintenance Services"
    ],
    benefits: [
      "24/7 property monitoring",
      "Crime deterrent",
      "Remote access anywhere",
      "Evidence recording"
    ],
    packages: [
      {
        name: "Home Security",
        price: "$499-799",
        features: ["4 HD cameras", "DVR system", "Mobile app", "Basic installation"]
      },
      {
        name: "Business Security",
        price: "$999-1999", 
        features: ["8+ cameras", "NVR system", "Cloud storage", "Professional setup"]
      },
      {
        name: "Enterprise Security",
        price: "$2000+",
        features: ["Custom camera count", "Advanced analytics", "Integration systems", "24/7 monitoring"]
      }
    ],
    timeline: "1-3 days",
    support: "1 year warranty"
  },
  "pc-assembly": {
    title: "Laptops & Desktop Sales & Assembly",
    icon: Laptop,
    description: "Quality computer hardware sales, custom PC builds, and comprehensive servicing and acquisition advisory.",
    longDescription: "Get the perfect computer system for your needs. Whether you need a powerful gaming rig, efficient business workstation, or budget-friendly family computer, we'll build it right.",
    features: [
      "Custom PC Builds",
      "Gaming Computers",
      "Business Workstations",
      "Laptop Sales",
      "Hardware Upgrades",
      "Performance Optimization",
      "Technical Support",
      "Warranty Service"
    ],
    benefits: [
      "Tailored to your needs",
      "Quality components",
      "Better price-performance",
      "Local support"
    ],
    packages: [
      {
        name: "Budget Build",
        price: "$399-699",
        features: ["Office tasks", "Web browsing", "Basic software", "1-year warranty"]
      },
      {
        name: "Gaming Build",
        price: "$899-1799",
        features: ["High-end graphics", "Fast processor", "Gaming peripherals", "Performance tuning"]
      },
      {
        name: "Workstation",
        price: "$1200+",
        features: ["Professional graphics", "Multiple monitors", "High memory", "Business software"]
      }
    ],
    timeline: "2-5 days",
    support: "1-3 year warranty"
  },
  "wifi-installation": {
    title: "WiFi Installation & Maintenance",
    icon: Wifi,
    description: "Professional network setup, WiFi optimization, and comprehensive maintenance services for homes and businesses.",
    longDescription: "Optimize your internet connectivity with professional WiFi installation and network setup. We ensure fast, reliable wireless coverage throughout your property.",
    features: [
      "Network Design",
      "Router Configuration",
      "WiFi Optimization",
      "Security Setup",
      "Range Extension",
      "Speed Testing",
      "Network Monitoring",
      "Troubleshooting"
    ],
    benefits: [
      "Improved WiFi coverage",
      "Faster internet speeds",
      "Enhanced security",
      "Reliable connections"
    ],
    packages: [
      {
        name: "Home WiFi",
        price: "$99-199",
        features: ["Router setup", "Password security", "Basic optimization", "Support"]
      },
      {
        name: "Business Network",
        price: "$299-599",
        features: ["Enterprise router", "Guest network", "Advanced security", "Management tools"]
      },
      {
        name: "Large Property",
        price: "$499+",
        features: ["Mesh system", "Multiple access points", "Site survey", "Professional installation"]
      }
    ],
    timeline: "1-2 days",
    support: "6 months included"
  },
  "drone-services": {
    title: "Unmanned Aerial Vehicles Design & Maintenance",
    icon: Plane,
    description: "Custom drone design, maintenance services, aerial photography, and comprehensive UAV solutions.",
    longDescription: "Explore the possibilities of unmanned aerial vehicles. From custom drone builds to professional aerial services, we provide comprehensive UAV solutions.",
    features: [
      "Custom Drone Design",
      "Aerial Photography",
      "Property Mapping",
      "Inspection Services",
      "Drone Maintenance",
      "Pilot Training",
      "Regulatory Compliance",
      "Video Production"
    ],
    benefits: [
      "Cost-effective inspections",
      "Unique perspectives",
      "Time-saving surveys",
      "Professional footage"
    ],
    packages: [
      {
        name: "Aerial Photography",
        price: "$150-300/hour",
        features: ["HD video/photos", "Professional editing", "Multiple angles", "Quick delivery"]
      },
      {
        name: "Property Mapping",
        price: "$500-1000",
        features: ["Detailed maps", "3D modeling", "Measurement data", "Progress tracking"]
      },
      {
        name: "Custom Drone",
        price: "$2000+",
        features: ["Tailored design", "Specific payload", "Training included", "Maintenance plan"]
      }
    ],
    timeline: "1 day - 4 weeks",
    support: "Training included"
  },
  "pcb-design": {
    title: "Printed Circuit Boards Design & Development",
    icon: Cpu,
    description: "Professional PCB design, prototyping, and development services for electronic projects and custom solutions.",
    longDescription: "Bring your electronic ideas to life with professional PCB design and development. From concept to production, we handle the complete electronics development process.",
    features: [
      "Custom PCB Design",
      "Schematic Development",
      "Prototyping Services",
      "Component Selection",
      "Testing & Validation",
      "Manufacturing Support",
      "Assembly Services",
      "Documentation"
    ],
    benefits: [
      "Professional designs",
      "Faster time to market",
      "Cost optimization",
      "Quality assurance"
    ],
    packages: [
      {
        name: "Simple PCB",
        price: "$200-500",
        features: ["Basic circuit", "2-layer board", "Standard components", "Testing"]
      },
      {
        name: "Complex PCB",
        price: "$500-1500",
        features: ["Multi-layer design", "Advanced components", "Simulation", "Prototyping"]
      },
      {
        name: "Full Development",
        price: "$1500+",
        features: ["Complete solution", "Custom enclosure", "Firmware", "Production ready"]
      }
    ],
    timeline: "2-8 weeks",
    support: "Design documentation"
  },
  "pos-systems": {
    title: "Point of Sale Design & Development",
    icon: Users,
    description: "Custom POS systems design and development for retail businesses and commercial establishments.",
    longDescription: "Streamline your business operations with custom point-of-sale systems. We design and develop POS solutions tailored to your specific business needs.",
    features: [
      "Custom POS Software",
      "Inventory Management",
      "Payment Processing",
      "Sales Reporting",
      "Customer Management",
      "Multi-location Support",
      "Hardware Integration",
      "Cloud Synchronization"
    ],
    benefits: [
      "Improved efficiency",
      "Better inventory control",
      "Detailed analytics",
      "Customer insights"
    ],
    packages: [
      {
        name: "Basic POS",
        price: "$799-1299",
        features: ["Sales processing", "Basic reporting", "Simple inventory", "Training"]
      },
      {
        name: "Advanced POS",
        price: "$1500-2500",
        features: ["Full inventory", "Customer management", "Analytics", "Multi-user"]
      },
      {
        name: "Enterprise POS",
        price: "$3000+",
        features: ["Multi-location", "Advanced reporting", "Integration", "Custom features"]
      }
    ],
    timeline: "3-6 weeks",
    support: "Training & maintenance"
  },
  "electrical-installation": {
    title: "Electrical Installations",
    icon: CheckCircle,
    description: "Professional electrical services including consumer wiring, electrical fencing, and complete installations.",
    longDescription: "Ensure safe and reliable electrical systems with our professional installation services. From basic wiring to complex electrical systems, we handle it all.",
    features: [
      "Consumer Wiring",
      "Electrical Fencing",
      "Panel Upgrades",
      "Safety Systems",
      "Lighting Installation",
      "Outlet Installation",
      "Circuit Protection",
      "Maintenance Services"
    ],
    benefits: [
      "Enhanced safety",
      "Code compliance",
      "Reliable power",
      "Professional installation"
    ],
    packages: [
      {
        name: "Basic Wiring",
        price: "$150-400",
        features: ["Room wiring", "Outlet installation", "Basic lighting", "Safety check"]
      },
      {
        name: "Electrical Fencing",
        price: "$500-1200",
        features: ["Perimeter fencing", "Control unit", "Warning signs", "Installation"]
      },
      {
        name: "Full Installation",
        price: "$1000+",
        features: ["Complete wiring", "Panel upgrade", "Safety systems", "Inspection"]
      }
    ],
    timeline: "1-5 days",
    support: "Safety guarantee"
  },
  "appliance-repair": {
    title: "Electroservicing",
    icon: Wrench,
    description: "Comprehensive repair and maintenance services for refrigerators, microwaves, blenders, cookers and other appliances.",
    longDescription: "Keep your appliances running smoothly with our professional repair and maintenance services. We service all major appliance brands and types.",
    features: [
      "Appliance Diagnostics",
      "Repair Services",
      "Maintenance Plans",
      "Parts Replacement",
      "Performance Optimization",
      "Warranty Service",
      "Emergency Repairs",
      "Preventive Care"
    ],
    benefits: [
      "Extended appliance life",
      "Reduced energy costs",
      "Reliable operation",
      "Professional service"
    ],
    packages: [
      {
        name: "Diagnostic Service",
        price: "$50-100",
        features: ["Problem identification", "Repair estimate", "Professional advice", "Service guarantee"]
      },
      {
        name: "Standard Repair",
        price: "$100-300",
        features: ["Common repairs", "Parts included", "Testing", "Follow-up support"]
      },
      {
        name: "Maintenance Plan",
        price: "$200+/year",
        features: ["Regular checkups", "Preventive care", "Priority service", "Discounted repairs"]
      }
    ],
    timeline: "Same day - 3 days",
    support: "Service warranty"
  }
};

const ServiceDetailPage = () => {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();
  
  const serviceData = service ? serviceDetails[service as keyof typeof serviceDetails] : null;

  usePageSEO({
    title: serviceData ? `${serviceData.title} - Realest Technologies` : "Service Details - Realest Technologies",
    description: serviceData?.description || "Learn more about our technology services and solutions.",
    keywords: serviceData?.title.toLowerCase().replace(/\s+/g, ', ') || "technology services"
  });

  if (!serviceData) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-16 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/services')}>
            Back to Services
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = serviceData.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                {serviceData.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {serviceData.longDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2 text-brand-green" />
                  Timeline: {serviceData.timeline}
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2 text-brand-green" />
                  Support: {serviceData.support}
                </div>
              </div>
              <Button size="lg" onClick={() => navigate('/contact')}>
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-primary" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-primary" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serviceData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Service Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the package that best fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceData.packages.map((pkg, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => navigate('/contact', { state: { selectedService: serviceData.title, selectedPackage: pkg.name } })}
                    >
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-brand-green/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and personalized quote for your {serviceData.title.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/contact')}
                  className="shadow-xl hover:shadow-2xl"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/services')}
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;