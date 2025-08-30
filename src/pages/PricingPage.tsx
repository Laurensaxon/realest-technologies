import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Zap, Crown, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    price: "KES 35,000",
    period: "per project",
    description: "Perfect for small businesses and startups looking to establish their digital presence",
    features: [
      "Basic Website (5 pages)",
      "Mobile Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "1 Month Support",
      "Social Media Integration",
      "Free Domain (.co.ke)",
      "Free Hosting (1 year)"
    ],
    popular: false,
    color: "bg-brand-green",
    services: ["Business Websites", "Basic WiFi Setup"]
  },
  {
    name: "Professional",
    icon: Crown,
    price: "KES 95,000",
    period: "per project",
    description: "Comprehensive solutions for growing businesses with advanced features",
    features: [
      "Custom Web Application",
      "E-commerce Integration (M-Pesa)",
      "Advanced SEO",
      "Analytics Dashboard",
      "3 Months Support",
      "Payment Gateway (M-Pesa/Card)",
      "User Management",
      "Database Integration",
      "Mobile App Integration",
      "WhatsApp Business API"
    ],
    popular: true,
    color: "bg-primary",
    services: ["Multi Platform Applications", "CCTV Installation", "POS Development"]
  },
  {
    name: "Enterprise",
    icon: Shield,
    price: "KES 250,000+",
    period: "based on scope",
    description: "Complete technology transformation for large organizations and government projects",
    features: [
      "Custom Software Development",
      "Cloud Infrastructure (AWS/Azure)",
      "24/7 Support",
      "Advanced Security",
      "Training & Documentation",
      "System Integration",
      "Ongoing Maintenance",
      "Priority Support",
      "Government Compliance",
      "Multi-location Setup"
    ],
    popular: false,
    color: "bg-brand-orange",
    services: ["PCB Design", "UAV Development", "Electrical Installations"]
  }
];

const servicePackages = [
  {
    category: "Hardware Solutions",
    packages: [
      {
        name: "CCTV Security Package",
        price: "From KES 45,000",
        description: "Complete surveillance system with 4 HD cameras and mobile monitoring",
        features: ["4 HD Cameras (1080p)", "8-Channel DVR", "Mobile Remote Viewing", "Professional Installation", "1TB Storage", "Night Vision"]
      },
      {
        name: "PC Build Package",
        price: "From KES 55,000",
        description: "Custom desktop computer assembly for business use",
        features: ["Intel/AMD Processor", "8GB RAM", "500GB SSD", "Professional Assembly", "Windows License", "1 Year Warranty"]
      },
      {
        name: "Laptop Sales Package",
        price: "From KES 35,000",
        description: "Quality laptops for students and professionals",
        features: ["Brand New/Refurbished", "Intel Core i5/i7", "8GB RAM", "256GB SSD", "Windows 11", "6 Months Warranty"]
      }
    ]
  },
  {
    category: "Network Solutions",
    packages: [
      {
        name: "Home WiFi Setup",
        price: "KES 15,000",
        description: "Professional home network installation with Safaricom/Airtel fiber",
        features: ["Router Configuration", "WiFi Security Setup", "Speed Optimization", "Device Connection", "3 Months Support"]
      },
      {
        name: "Business Network Setup",
        price: "From KES 35,000",
        description: "Enterprise-grade network infrastructure",
        features: ["Business Router", "Network Security", "Guest Network", "VPN Setup", "Staff Training", "6 Months Support"]
      }
    ]
  },
  {
    category: "Specialized Services",
    packages: [
      {
        name: "Drone Photography",
        price: "KES 12,000/day",
        description: "Aerial photography and videography for events and real estate",
        features: ["4K Video Recording", "Professional Editing", "Property Mapping", "Event Coverage", "Same Day Delivery"]
      },
      {
        name: "POS System",
        price: "From KES 25,000",
        description: "Complete point of sale system with M-Pesa integration",
        features: ["M-Pesa Integration", "Inventory Management", "Receipt Printing", "Staff Training", "Cloud Backup", "1 Year Support"]
      }
    ]
  }
];

const PricingPage = () => {
  const navigate = useNavigate();
  
  usePageSEO({
    title: "Pricing - Realest Technologies | Affordable Tech Solutions in Kenya",
    description: "Transparent pricing in KES for web development, CCTV installation, PC builds, and M-Pesa integration. Serving Nairobi and all of Kenya.",
    keywords: "pricing Kenya, web development cost Nairobi, CCTV installation price Kenya, PC build pricing Nairobi, M-Pesa integration cost, technology services Kenya"
  });

  const handleGetStarted = (planName: string) => {
    navigate('/contact', { state: { selectedPlan: planName } });
  };

  const handleServiceDetails = (serviceName: string) => {
    navigate('/services', { state: { selectedService: serviceName } });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-semibold border border-brand-green/20">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-brand-green to-brand-orange bg-clip-text text-transparent">
              Simple, Honest Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your Kenyan business. All prices in KES with M-Pesa payment options and local support.
            </p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-500 hover:shadow-premium hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-primary shadow-glow scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-brand-green p-2 text-center">
                      <span className="text-white text-sm font-semibold flex items-center justify-center">
                        <Star className="w-4 h-4 mr-1" /> Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-8' : ''}`}>
                    <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <CardDescription className="text-center">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Includes Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {plan.services.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleGetStarted(plan.name)}
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Individual Service Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Need specific services? Choose from our focused service packages designed for particular needs.
              </p>
            </div>

            {servicePackages.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.packages.map((pkg, pkgIndex) => (
                    <Card key={pkgIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-6">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Check className="w-4 h-4 text-brand-green mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => handleServiceDetails(pkg.name)}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-brand-green/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Need a Custom Solution?
              </h2>
               <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every Kenyan business is unique. Let's discuss your specific requirements and create a tailored solution with flexible payment plans and local support.
               </p>
              <Button 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="shadow-xl hover:shadow-2xl"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;